let logout = () => {
  sessionStorage.clear();
  changeActivePage("homepage");
}

//*---------profilepage if logged in
let getProfile = async () => {
  let {data} = await axios.get("http://localhost:1337/api/users?populate=*",
  {})
  renderProfile(data);
}
let renderProfile = (data) => {
  const divElement = document.createElement("div");
  let userElement = document.createElement("article")
  const booksElement = document.createElement("article");
  booksElement.classList.add("homepage__grid");
  let users = [];
  let userLocal = localStorage.getItem("userObj");
  let formattedUser = JSON.parse(userLocal);
  
  data.forEach(item => {
    //*check for user
    if (item.email === formattedUser.email || item.username === formattedUser.username){
      //*creating user
      users.push(item.username, item.email, item.id, item.createdAt, item.img)

      //*creating date:
      const date = item.createdAt.slice(0,10);
      const year = date.slice(0,4);
      const month = date.slice(5,7);
      const day = date.slice(8,10);
      const memberSince = day + " " + dateTransform(month) + " " + year;
      //*cycling through books to see matches with user
      allBooks.forEach(book => {
        let userInBooks = book.attributes.users.data[0].attributes;
       
        //*if match:
        if (userInBooks.email === formattedUser.email || userInBooks.username === formattedUser.username){
          
          let userBooks = [];
          userBooks.push(book);
          userElement.innerHTML = `<div class="profile__welcome">
          <h2>Hej ${item.username}!</h2>
          <span>
          <img src="./styles/img/ducksolo--blue.png"
          class="profile__img">
          <p>Användarnamn: ${item.username}</p>
          <p>Medlemsnummer: 0${item.id} </p>
          <p>Email:  ${item.email}</p>
          <p>Medlem sedan : ${memberSince} </p>
          </span>
          </div>
          <h2>Det här är dina böcker: </h2>
          `
          userBooks.forEach(book => {
            let booksgrid = document.createElement("div");
            booksgrid.classList.add("profile__grid--griditem");
            
            booksgrid.innerHTML = `
            <div class="book__user">
            <h3>${book.attributes.author}</h3>
            <h4>${book.attributes.title}</h4>
            <p>Betyg: ${book.attributes.rating}/5</p>
            <p>Beskrivning: ${book.attributes.description}</p>
            <p>Genre: ${book.attributes.genres.data[0].attributes.title}</p>
            <p>Typ av bok: ${book.attributes.type} </p>
            </div>
            `
            booksElement.appendChild(booksgrid);
          })
        }
        })    
        divElement.appendChild(userElement);
        divElement.appendChild(booksElement);
    }
  })
  renderedProfile.appendChild(divElement);
}


if(sessionStorage.getItem("token")){
  let userLocal = localStorage.getItem("userObj");
  let user = JSON.parse(userLocal);
  //*functionaly in navbar:
  loggedInNav.innerHTML = `<b>${user.username}</b> är inloggad`
  //*adding links in menu (logout and profilepage)
  const li = document.createElement("li");
  li.innerHTML=`<a href="#" id="profilepage">Profil</a>`
  document.getElementById("menu").appendChild(li);
  li.addEventListener("click", (e) => {
    changeActivePage("profilePage")
  })
  const logoutbutton = document.createElement("li");
  logoutbutton.innerHTML=`<a href="#" id="logout">Logga ut</a>`
  document.getElementById("menu").appendChild(logoutbutton);
  logoutbutton.addEventListener("click", (e) => {
    logout();
  })
  getProfile();  
}

const confirmLogin = () => {
  if(sessionStorage.getItem("token")){
    getProfile();
    changeActivePage("profilePage");
  }
}

//*----------login functionality
let login = async () => {
  let input = inputUserName[0].value;
  let password = inputPassword[0].value;
  if (input == "" || password == ""){
    errorMessageContainer.innerText = "Du behöver fylla i båda fälten";
  }
  await axios.post("http://localhost:1337/api/auth/local/",
  {
    identifier: input,
    password: password
  })
  .then(response => {
    let token = response.data.jwt;
 
    sessionStorage.setItem("token", token)
    localStorage.setItem("userObj", JSON.stringify(response.data.user))
    let userLocal = localStorage.getItem("userObj");
    let formattedUser = JSON.parse(userLocal);
 
    loggedInNav.innerHTML=`Hej <b>${formattedUser.username}</b>`
    confirmLogin();
  })
  .catch(error => {
    let errorMessage = error.response.data.error.message;
    if (errorMessage == "Invalid identifier or password"){
      errorMessageContainer.innerText = "Ogiltigt lösenord eller användarnamn, prova igen!"
    }
    else if (errorMessage == "password is a required field"){
      errorMessageContainer.innerText = "KVACK! Du glömde lösen"
    }
    else if (errorMessage == "identifier is a required field"){
      errorMessageContainer.innerText = "Kvack, du glömde att skriva användarnamn."
    }
    })
}
loggingIn.forEach(button => { 
  button.addEventListener("click", (e) => {
    e.preventDefault();
    login();
  })
})


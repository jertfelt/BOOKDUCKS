let getProfile = async () => {
  let {data} = await axios.get("http://localhost:1337/api/users?populate=*",
  {})
  renderProfile(data);
}

let renderProfile = (data) => {
  let users = [];
  let user = localStorage.getItem("user");
  
  data.forEach(item => {
    if (item.email === user || item.username === user){
      users.push(item.username, item.email, item.id, item.createdAt, item.img)
    }
  })
  console.log(users)
 
  const date = users[3].toString();
  console.log(date)
  const divElement = document.createElement("div");
  let picture = "http://localhost:1337" + users[5];
  divElement.innerHTML = `<div class="profile__welco}me"><span>
  <h2>Hej ${users[0]}</h2>
  <img src="${picture}"}</span>
  <h3>Det här är dina detaljer:</h3>
  <hr>
  <p>Användarnamn: ${users[0]}</p>
  <p>Email:  ${users[1]}</p>
  <p>
  `
  renderedProfile.appendChild(divElement);
}


if(sessionStorage.getItem("token")){
  let user = localStorage.getItem("user")
  loggedInNav.innerHTML = `<b>${user}</b> är inloggad`
  const li = document.createElement("li");
  li.innerHTML=`<a href="#" id="profilepage">Profil</a>`
  document.getElementById("menu").appendChild(li);
  li.addEventListener("click", (e) => {
    changeActivePage("profilePage")
  })
  getProfile();
}



const confirmLogin = () => {
  if(sessionStorage.getItem("token")){
    getProfile();
  }
}



let login = async () => {
  let input = inputUserName[0].value;
  let password = inputPassword[0].value;

  if (input == "" || password == ""){
    alert("Du behöver fylla i båda fälten")
  }

  await axios.post("http://localhost:1337/api/auth/local/",
  {
    identifier: input,
    password: password
  })
  .then(response => {
    let token = response.data.jwt;
    sessionStorage.setItem("token", token)
    localStorage.setItem("user", input)
    loggedInNav.innerHTML=`Hej <b>${input}</b>`
    confirmLogin();
  })
  .catch(error => {
    let errorMessage = error.response.data.error.message;
    console.log(errorMessage)
    if (errorMessage == "Invalid identifier or password"){
      alert("Ogiltigt lösenord eller användarnamn, prova igen!")
    }
    else {
      alert("Något gick fel, försök igen senare!")
    }
  })
}
loggingIn.forEach(button => { 
  button.addEventListener("click", (e) => {
    e.preventDefault();
    login();
  })
})

let logout = () => {
  sessionStorage.clear();
  changeActivePage("homepage");
}

const confirmLogin = () => {

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
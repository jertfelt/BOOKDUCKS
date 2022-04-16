
let register = async () => {
  let newUsername = document.getElementById("usernameRegister");
  let newEmail = document.getElementById("emailRegister");
  let newPassword = document.getElementById("passwordRegister");
  if (newUsername.value === "" || newEmail.value === "" || newPassword.value == ""){
    // alert("KVACK! Du behöver fylla i alla fälten")
    registerMessage.innerHTML=`<p>KVACK! Du behöver fylla i alla fälten</p>`
  }
   await axios.post("http://localhost:1337/api/auth/local/register",
    {
      email: newEmail.value,
      username: newUsername.value,
      password:newPassword.value,
    })
    .then(response => {
      let token = response.data.jwt;
      sessionStorage.setItem("token", token);
      localStorage.setItem("user", username)
      localStorage.setItem("userObj", JSON.stringify(response.data.user))
      let userLocal = localStorage.getItem("userObj");
      let formattedUser = JSON.parse(userLocal);
      registerMessage.innerHTML=`
      <p>Lyckad registrering. Välkommen ${formattedUser.username}. Nu är du inloggad</p>`
      console.log("User registration successful!")
      loggedInNav.innerHTML=`Hej <b>${formattedUser.username}<b>`
      confirmLogin();
    })
    .catch(error => {
      
        console.log(error)
      let errorMessage = error.response.data.error.message;
      if (errorMessage == "email must be a valid email"){
        // alert("Du behöver fylla i en riktig emailadress, ankan!")
        registerMessage.innerHTML=`<p>Du behöver fylla i en riktig emailadress, ankan!</p>`
      }
      if (errorMessage == "An error occurred during account creation"){
        let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (newPassword.value.match(password) !== true)
        {
          console.log("Password is wrong");
          // alert("Något gick fel! Är lösenordet minst 6 tecken långt, och har lösenordet en stor bokstav och en siffra? Prova igen!")
          registerMessage.innerHTML=`<p>Något gick fel! Är lösenordet minst 6 tecken långt, och har lösenordet en stor bokstav och en siffra? <br>Prova igen!</p>`;
        } else if (newPassword.value.length < 6){
          console.log("Password is too short");
          // alert("Något gick fel! Är lösenordet minst 6 tecken långt, och har lösenordet en stor bokstav och en siffra? Prova igen!")
          registerMessage.innerHTML=`<p>Något gick fel! Är lösenordet minst 6 tecken långt, och har lösenordet en stor bokstav och en siffra? <br>Prova igen!</p>`;
      }
      else {
        registerMessage.innerHTML=`<p>Något gick fel! Kolla om allt stämmer? <br>Prova igen!</p>`
      }
    }
      if (errorMessage == "Email is already taken"){
        // alert("Hoppsan, någon använder redan den här mailen! Du kanske vill återställa ditt lösenord?")
        registerMessage.innerHTML=`<p>Hoppsan, någon använder redan den här mailen!</p>`
      }
      else{
        registerMessage.innerHTML=`<p>Något stämmer inte, prova gärna igen</p>`
      }
    }
    )
}

registerNew.addEventListener("click", () => {
  register();
});


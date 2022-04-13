//*---------variables
let sectionHomepage = document.getElementById("homepage");
let sectionLogin = document.getElementById("login");
let sectionRegister = document.getElementById("register");
let sectionprofilePage = document.getElementById("profilePage");
let homepageHero = document.getElementById("hero");
let homepageGenreGrid = document.getElementById("genregrid");
let seeAllBooks = document.getElementById("allbooks");
let onlyBooks = document.getElementById("books");
let onlyAudio = document.getElementById("audiobooks");
let becomeMember = document.querySelectorAll(".button__becomemember");
let forgotPassword = document.getElementById("forgottenPassword");
let inputUserName = document.querySelectorAll(".input__username");
let inputPassword = document.querySelectorAll(".input__password");
let loggingIn = document.querySelectorAll(".submitLogin");
let registerNew = document.getElementById("submitRegister");
let registerMessage = document.getElementById("messageRegister");
let loggedInNav = document.getElementById("loggedinUser");
let renderedProfile = document.getElementById("renderedProfile");


//dropdown button
const menuButton = document.getElementById("menuToggle");
let dropdownMenu = document.querySelector("#dropDownMenu");

//*---open dropdown (by click or pushing enter)

const openDropdown = () => {
  if (dropdownMenu.classList.contains("dropdown"))
  {dropdownMenu.classList.remove("dropdown");
  }
  else 
  dropdownMenu.classList.add("dropdown");
}
menuButton.addEventListener("click", openDropdown);

document.addEventListener('keydown', function(event){
  if(event.key == "ArrowDown"){
  openDropdown();
  }
})

//*----close dropdown (by click or keydown)
const closeDropDown = () => {
  dropdownMenu.classList.add("dropdown");
}

document.getElementById("closeDropDown").addEventListener("click", closeDropDown);

document.addEventListener('keydown', function(event){
  if(event.key === "Escape")
  {
  if (dropdownMenu.classList.contains("dropdown") === false){
    closeDropDown();
  }
  }
});


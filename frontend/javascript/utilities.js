//*---------variables
//navigation
let sectionHomepage = document.getElementById("homepage");
let sectionLogin = document.getElementById("login");
let sectionRegister = document.getElementById("register");
let sectionprofilePage = document.getElementById("profilePage");
let homepageHero = document.getElementById("hero");
let homepageGenreGrid = document.getElementById("genregrid");
let seeAllBooks = document.getElementById("allbooks");
let onlyBooks = document.getElementById("books");
let onlyAudio = document.getElementById("audiobooks");


//--login and register
let becomeMember = document.querySelectorAll(".button__becomemember");
let inputUserName = document.querySelectorAll(".input__username");
let inputPassword = document.querySelectorAll(".input__password");
let loggingIn = document.querySelectorAll(".submitLogin");
let registerNew = document.getElementById("submitRegister");
let registerMessage = document.getElementById("messageRegister");
let loggedInNav = document.getElementById("loggedinUser");
let errorMessageContainer = document.querySelector("#errorMessageContainer");

//--profilepage
let renderedProfile = document.getElementById("renderedProfile");

//---profilepage > add book form
let createBookForm = document.getElementById("createBook");
let chosenImg = document.getElementById("chosenbookImg");
let inputImgFile = document.getElementById("bookImage");
let inputTitle = document.getElementById("bookTitle");
let inputAuthor = document.getElementById("bookAuthor");
let inputDescription = document.getElementById("bookDescription");
let inputLength = document.getElementById("bookLength");
let inputRating = document.getElementById("bookRating");
let inputGenre = document.getElementById("bookGenre");
let inputAudio = document.getElementById("audio");
let inputBook = document.getElementById("book");
let addBookButt = document.getElementById("addBookBtn");

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

//*---transforming date to more readable text 
const dateTransform = (nr) => {
if (nr === "04"){
  return "April"
}
else if (nr === "01"){
  return "Januari"
}
else if (nr === "02"){
  return "Februari"
}
else if (nr === "03"){
  return "Mars"
}
else if (nr === "05"){
  return "Maj"
}
else if (nr === "06"){
  return "Juni"
}
else if (nr === "07"){
  return "Juli"
}
else if (nr === "08"){
  return "Augusti"
}
else if (nr === "09"){
  return "September"
}
else if (nr === "10"){
  return "Oktober"
}
else if (nr === "11"){
  return "November"
}
else if (nr === "12"){
  return "December"
}
}
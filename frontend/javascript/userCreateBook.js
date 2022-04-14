
let defaultImg = [];

defaultBookImages.innerHTML =`<h1>hej</h1>`


addBookButt.addEventListener("click", () => {
  console.log("klick")
  const checkRadio = () => {
  if(inputAudio.checked){
    let url = "http://localhost:1337/api/audiobooks";
    let type = "ljudbok";
    addBook(url,type);
  }
  else if (inputBook.checked){
    let url = "http://localhost:1337/api/books";
    let type = "pocketbok";
    addBook(url,type);
  }
  }
  checkRadio()
})

let addBook = async (url,type) => {
  if (inputAuthor.value === "" || inputTitle.value === ""){
    alert("Dessa fält kan inte vara tomma")
  }
  let userLocal = localStorage.getItem("userObj");
  let user = JSON.parse(userLocal);
  console.log(user)
  let response = await axios.post(url, {
      data: {
          author: inputAuthor.value,
          title: inputTitle.value,
          rating: inputRating.value,
          description: inputDescription.value,
          length: inputLength.value,
          type: type,
          users: user
          // picture: inputImgFile.value
      }
  }, {
      headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
  })
}

;
// let bookImagesProfile = document.getElementById("defaultBookImages");

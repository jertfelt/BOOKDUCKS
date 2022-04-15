let genreID = [];
// let defaultImg = [];
addBookButt.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputAuthor.value === "" || inputTitle.value === "" || inputImgFile.value ==""){
    document.getElementById("profileError").innerHTML=`<h3 class="text--red">Följande fält får inte vara tomma:</h3>
    <ul>
    <li>Titel</li>
    <li>Författare</li>
    <li>Bokomslagsbild</li>
    </ul>
    <p>Dubbelkolla att du fått med allt och prova igen.</p>`
  }
  //checking radios and determining which type of url to use in axios post,
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
  //user:
  let userLocal = localStorage.getItem("userObj");
  let user = JSON.parse(userLocal);
  let userId = [user.id]

  //genre:
  let selectedGenre = inputGenre.options.selectedIndex + 1
  genreID.push(selectedGenre);

  //picture:
  let img = inputImgFile.files;
  let imgData = new FormData();
  imgData.append("files", img[0])

  await axios.post("http://localhost:1337/api/upload", imgData)
  .then(response =>{
    axios.post(url, {
      data: {
        author: inputAuthor.value,
        title: inputTitle.value,
        rating: inputRating.value,
        description: inputDescription.value,
        length: inputLength.value,
        type: type,
        picture: response.data[0].id,
        users: userId,
        genres: genreID
    }}, {
      headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
  }
    )
  })
}


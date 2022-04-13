let getHomepage = async () => {
  let {data} = await axios.get("http://localhost:1337/api/homepage?populate=*", {
  })
  renderHome(data);
}

let getGenres = async () => {
  let {data} = await axios.get("http://localhost:1337/api/genres?populate=*",
  {

  })
  renderGenres(data);
}

let getAllBooks = async () => {
  let {data} = await axios.get("http://localhost:1337/api/books?populate=*",
  {})
  renderAllBooks(data);
}

let getAllAudioBooks = async () => {
  let {data} = await axios.get("http://localhost:1337/api/audiobooks?populate=*")
  renderAllAudioBooks(data);
}

//Homepage:
let renderHome = (data) => {
  let homepageContent = document.createElement("article");
  let homepageAbout = data.data.attributes.about;
  let homepagePictureURL1 = data.data.attributes.picture.data.attributes.url;
  let homepagePicture1 = "http://localhost:1337" + homepagePictureURL1;
  let homepageTitle = data.data.attributes.title;
    homepageContent.innerHTML = `
    <div class="hero__backgroundpic">
    <img src="${homepagePicture1}"
    alt="Bild på böcker"/>
    </div>
    <div class="hero__content">
    <h2>${homepageTitle}</h2>
    <h3>${homepageAbout}</h3>
    <a href="#" class="button__becomemember"><h3>Läs mer!</h3></a>
    </div>`
    homepageHero.appendChild(homepageContent)
}


//Genres (at homepage):
let renderGenres = (item) => {
  let homepageGenres = document.createElement("article");
  homepageGenres.classList.add("homepage__gridgenres");
  let arrayOfGenres = item.data;
  arrayOfGenres.forEach(object => {
    // let pictures = "http://localhost:1337" +object.attributes.picture.data.attributes.url; 
    let genreArticleContent = document.createElement("div");
    genreArticleContent.innerHTML= `
    <div class="genre__content genre__hover">
    <h2>${object.attributes.title}</h2>
    <p>${object.attributes.description}</p>
    <button class="button__genre" id="Genre${object.id}">
    Se alla böcker i den här kategorin</button>
    </div>`
    homepageGenres.appendChild(genreArticleContent);
  })
  homepageGenreGrid.appendChild(homepageGenres);
}

let renderAllBooks = (info) => {
  let bookGrid = document.createElement("article");
  bookGrid.classList.add("homepage__grid");
  let arrayOfBooks = info.data;
 
  arrayOfBooks.forEach(book => {
    let bookElem = document.createElement("div");
    bookElem.classList.add("homepage__grid--griditem")
    let genres = [];
    let bookGenres = book.attributes.genres.data;
    bookGenres.forEach(genre => {
      genres.push(genre.attributes.title);
    })
    let pictures = "http://localhost:1337" + book.attributes.picture.data[0].attributes.url
    bookElem.innerHTML=`
    <div class="book__content">
    <p class="book__category text--uppercase">Kategori:<br> ${genres}</p>
    
    <span class="book__content--row">
    <span class="book__content--rowright">
    <img src="${pictures}" 
    alt="Bokomslag">
    </span>
    <span>
    <h3>${book.attributes.author}</h3>
    <h4>${book.attributes.title}</h4>
    <p>Längd: ${book.attributes.length} sidor</p>
    <p>Betyg: ${book.attributes.rating}/5</p>
    </span>
    
    </span>
    <div class="book__content--description">
    <p>Beskrivning: ${book.attributes.description}</p>
    </div>
    <div class="book__user">
    <h4>Utlånare:</h4>
    <p>Användare:  ${book.attributes.users.data[0].attributes.username}</p>
    <p>Email: ${book.attributes.users.data[0].attributes.email}</p>
    </div>
    </div>`
    bookGrid.appendChild(bookElem);
  })
  onlyBooks.appendChild(bookGrid);
}
let renderAllAudioBooks = (data) => {
  let bookGrid = document.createElement("article");
  bookGrid.classList.add("homepage__grid");
  let arrayOfBooks = data.data;
  arrayOfBooks.forEach(book => {
    let bookElem = document.createElement("div");
    let genres = [];
    let bookGenres = book.attributes.genres.data;
    bookGenres.forEach(genre => {
      genres.push(genre.attributes.title);
    })
    let pictures = "http://localhost:1337" + book.attributes.picture.data.attributes.url;
    bookElem.innerHTML=`
    <div class="book__content">
    <p class="book__category text--uppercase">Kategori:<br> ${genres}</p>
    <span class="book__content--row">
    <span class="book__content--rowright">
    <img src="${pictures}" 
    alt="Bokomslag">
    </span>
    <span>
    <h3>${book.attributes.author}</h3>
    <h4>${book.attributes.title}</h4>
    <p>Längd: ${book.attributes.length} </p>
    <p>Betyg: ${book.attributes.rating}/5</p>
    </span>
    
    </span>
    <div class="book__content--description">
    <p>Beskrivning: ${book.attributes.description}</p>
    </div>
    <div class="book__user">
    <h4>Utlånare:</h4>
    <p>Användare: ${book.attributes.users.data[0].attributes.username}</p>
    <p>Email: ${book.attributes.users.data[0].attributes.email}</p>
    </div>
    </div>`
    bookGrid.appendChild(bookElem);
  })
  onlyAudio.appendChild(bookGrid);
}

async function registerTest(){
  return axios.post("http://localhost:1337/api/auth/local/register", {
    username:"Test000",
    email:"Test800@gmail.com",
    password:"Test10100"
  });
}
const getAll = () => {
  getAllBooks();
  getAllAudioBooks();
}

getHomepage();
getAll();
getGenres();



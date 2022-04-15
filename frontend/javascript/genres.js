let getGenres = async () => {
  let {data} = await axios.get("http://localhost:1337/api/genres?populate=*",)
  renderGenres(data);
}

genresURL = [];

//Genres (at homepage):
let renderGenres = (item) => {
  let homepageGenres = document.createElement("article");
  homepageGenres.classList.add("homepage__gridgenres");
  let arrayOfGenres = item.data;

  arrayOfGenres.forEach(object => {
    let genreLinks = "http://localhost:1337/api/genres/" + object.id; 
    genresURL.push(genreLinks)
    //creating select options for profilepage:
    let options = document.createElement("option");
    options.value = object.id;
    options.innerHTML = object.attributes.title;
    inputGenre.appendChild(options);
  })
}
getGenres();
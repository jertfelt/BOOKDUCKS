
let sections = document.querySelectorAll(".section");

//*------URLQueries för routing:
const changeActivePage = (sectionName) => {
  const urlWithSearchParams = createURL(sectionName);
  location.href = urlWithSearchParams;
};

const createURL  = (sectionName) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;
  search_params.set('section', sectionName);
  return url.toString();
}
const setActivePage = () => {
  let url = new URL(window.location.href);
  let search_params = url.searchParams;
  let currentSection = search_params.get("section");
  
  if (currentSection === null){
    sections.forEach(section => {
      section.classList.add("hidden");
      if (section.id === "homepage"){
        section.classList.remove("hidden");
      }})
  }
  else {
    sections.forEach(section => {
      section.classList.add("hidden");
      if (section.id === currentSection)
      {
        section.classList.remove("hidden");
      }})
  }
}
setActivePage();

//*---eventlisteners som byter sida:
document.getElementById("homepage").addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("homepage")
})

//kom ihåg: section id:profilePage
becomeMember.forEach(link => {
link.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("register")
});
})

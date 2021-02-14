let filmList = [
  {
    name: "SomeName",
    rating: 4.5,
    jenre: 'Драма',
    imgName: '1.jpg'
  }
]

let currentFilmList = []

let selectedClass = 'selected'

function makeFilmCard (name, rating, imgName) {
  return `<div class="film-card">
      <div style = "background-image: ./film-images/${imgName}" class="film-image">

      </div>
      <div class="film-about">
        <p>${name}</p>
        <p>${rating}</p>
      </div>
    </div>`
}

function deleteElemByClass (className) {
  //add animation!!!
  let elem = document.getElementsByClassName(className)[0]
  elem.parentNode.removeChild(elem)
}




function clearSelection (obj){
  for (elem of obj) elem.classList.remove(selectedClass)
}

function showFilms(jenreName){
  currentFilmList = filmList.filter(film => film.jenre == jenreName)
  let filmListElem = document.getElementsByClassName('film-list')[0]

  for (filmElem of currentFilmList) {
    filmListElem.insertAdjacentHTML('beforeend', makeFilmCard(filmElem.name, filmElem.rating, filmElem.imgName));
  }
  currentFilmList = []
}

function showJenre(e){
  if (!e.classList.contains(selectedClass)) {
    clearSelection(document.getElementsByClassName('jenre-elem'))
    e.classList.add(selectedClass)
    document.getElementsByClassName('removing-title')[0].innerHTML = e.innerHTML
    //deleteElemByClass('removing-title')
    showFilms(e.innerHTML)
  }
}

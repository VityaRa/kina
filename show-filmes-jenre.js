let filmList = [
  {
    name: "Зелёная миля",
    rating: 9.1,
    jenre: ['Драма', 'Фантастика'],
    imgName: '1.webp'
  }, 
  {
    name: "Побег из Шоушенка",
    rating: 9.5,
    jenre: 'Драма',
    imgName: '10.webp'
  },
  {
    name: "Властелин колец",
    rating: 8.1,
    jenre: ['Фантастика', 'Приключения'],
    imgName: '2.webp'
  },
  {
    name: "Интерстеллар",
    rating: 8.7,
    jenre: ['Фантастика', 'Драма'],
    imgName: '3.webp'
  },
  {
    name: "Форрест Гамп",
    rating: 9.5,
    jenre: ['Драма', 'Мелодрама'],
    imgName: '4.webp'
  },
  {
    name: "Список Шиндлера",
    rating: 8.8,
    jenre: ['Драма', 'Трагедия'],
    imgName: '5.webp'
  },
  {
    name: "1+1",
    rating: 9.7,
    jenre: ['Драма', 'Комедия'],
    imgName: '6.webp'
  },
  {
    name: "Назад в будущее",
    rating: 9.8,
    jenre: ['Комедия', 'Фантастика'],
    imgName: '7.webp'
  },
  {
    name: "Король Лев",
    rating: 7.8,
    jenre: ['Приключение', 'Трагедия'],
    imgName: '8.webp'
  },
  {
    name: "Криминальное чтиво",
    rating: 8.9,
    jenre: ['Триллер', 'Комедия'],
    imgName: '9.webp'
  },

]

let currentFilmList = []

let selectedClass = 'selected'

function makeFilmCard (name, rating, imgName) {
  return `<div class="film-card">
      <div style = "background-image: url(./film-images/${imgName});" class="film-image">

      </div>
      <div class="film-about">
        <p>${name}</p>
        <p>${rating}</p>
      </div>
    </div>`
}


function deleteElemByClass (className) {
  //add animation!!!
  if (document.getElementsByClassName(className).length != 0) {
    let elem = document.getElementById("filmList");
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
}

function clearSelection (obj){
  for (elem of obj) elem.classList.remove(selectedClass)
}


function showFilms(jenreName){
  currentFilmList = filmList.filter(film => film.jenre.includes(jenreName))
  let filmListElem = document.getElementsByClassName('film-list')[0]

  for (filmElem of currentFilmList) {
    filmListElem.insertAdjacentHTML('beforeend', makeFilmCard(filmElem.name, filmElem.rating, filmElem.imgName));
  }
  currentFilmList = []
}

function delay(callback) {
  setTimeout(callback, 1000)
}



function showJenre(e){
  if (!e.classList.contains(selectedClass)) {
    clearSelection(document.getElementsByClassName('jenre-elem'))
    e.classList.add(selectedClass)

    deleteElemByClass('film-card')
    document.getElementsByClassName('removing-title')[0].innerHTML = e.innerHTML
    showFilms(e.innerHTML)
  }
}

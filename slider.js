$(document).ready(function(){
  //Loading function...
  let i = 1
  const sliderDelay = 200
  const imageCount = 3
  const aboutInfo = [
    `Джина Карано отчислена из "Мандалорца"`,
    `WarnerMedia надела маски на героев "Матрицы" и "Властелина колец"`,
    `Педро Паскаль сыграет Джоэла в экранизации «The Last of Us». Роль Элли досталась Белле Рэмси из «Игры престолов»`
  ]
  

  function renderSlider(){
    $('.slider-image img').fadeOut(sliderDelay).fadeIn(sliderDelay)
    setTimeout(() => $('.slider-image img').prop('src', './news-images/' + i + '.jpg'), sliderDelay)

    $('.slider-text p').fadeOut(sliderDelay).fadeIn(sliderDelay)
    setTimeout(() => $('.slider-text p').text(aboutInfo[i - 1]), sliderDelay)

  }

  $('.left-btn').on('click', () => {
    --i
    if (i < 1) i = imageCount
    renderSlider()
  })

  $('.right-btn').on('click', () => {
    ++i
    if (i > imageCount) i = 1
    renderSlider()
  })

  renderSlider()

})
goToHome = document.querySelector('#goToHome')
goToCard = document.querySelector('#goToCard')
goToAbout = document.querySelector('#goToAbout')
sections = document.querySelector('.sections')
content = document.querySelector('.content-page')
x = document.querySelector('.fa-x')
navBar = document.querySelector('.navBar svg')

goToHome.addEventListener('click', change)
x.addEventListener('click', change)
navBar.addEventListener('click', change)

function change() {
  sections.classList.toggle('hide')
  content.classList.toggle('hide')
}

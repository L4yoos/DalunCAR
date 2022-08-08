const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav__links')[0]
const bar = document.getElementsByClassName('bar')[0]
const bar1 = document.getElementsByClassName('bar')[1]
const bar2 = document.getElementsByClassName('bar')[2]
const logo = document.getElementsByClassName("logo")[0];
const sekcja = document.getElementsByClassName("sekcja")[0];
const footer = document.querySelector("footer");

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    bar.classList.toggle('activeBAR')
    bar1.classList.toggle('activeBAR1')
    bar2.classList.toggle('activeBAR2')

    toggleButton.classList.toggle('menu')
    logo.classList.toggle('logojd')
    sekcja.classList.toggle('sekcjamenu')
    footer.classList.toggle('footermenu')
})
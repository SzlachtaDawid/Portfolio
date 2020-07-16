// NAWIGACJA
$('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})

// MENU POWRÓT
$('nav p').on('click', function () {
    $('body, html').animate({
        scrollTop: '0px'
    }, 1000)
})

// MENU INTERAKCJA
const me = document.querySelector('div.me')
const meTop = document.querySelector('div.me').offsetTop
const meHeight = document.querySelector('div.me').clientHeight

const technology = document.querySelector('section.technology')
const technologyTop = document.querySelector('section.technology').offsetTop
const technologyHeight = document.querySelector('section.technology').clientHeight

const portfolio = document.querySelector('section.portfolio')
const portfolioTop = document.querySelector('section.portfolio').offsetTop
const portfolioHeight = document.querySelector('section.portfolio').clientHeight

const hobby = document.querySelector('section.hobby')
const hobbyTop = document.querySelector('section.hobby').offsetTop
const hobbyHeight = document.querySelector('section.hobby').clientHeight

const kontakt = document.querySelector('section.kontakt')
const kontaktTop = document.querySelector('section.kontakt').offsetTop
const kontaktHeight = document.querySelector('section.kontakt').clientHeight



const scrollwindow = function () {
    const windows = window.scrollY
    console.log(windows)
    console.log(hobbyTop)
    console.log(hobbyHeight)
    if (windows > hobbyTop - hobbyHeight / 3) {
        hobby.style.transition = '2s'
        hobby.style.opacity = '100%'
    } else {
        hobby.style.opacity = '0'
    }
    if (windows > meTop - meHeight / 2) {
        me.style.transition = '2s'
        me.style.opacity = '100%'
    } else {
        me.style.opacity = '0'
    }
    if (windows > technologyTop - technologyHeight / 2) {
        technology.style.transition = '2s'
        technology.style.opacity = '100%'
    } else {
        technology.style.opacity = '0'
    }
    if (windows > portfolioTop - portfolioHeight / 2) {
        portfolio.style.transition = '2s'
        portfolio.style.opacity = '100%'
    } else {
        portfolio.style.opacity = '0'
    }
    if (windows + kontaktHeight * 5 > kontaktTop) {
        kontakt.style.transition = '2s'
        kontakt.style.opacity = '100%'
    } else {
        kontakt.style.opacity = '0'
    }
}

window.addEventListener('scroll', scrollwindow)

// alert('W wersji moblinej na małych rodzielczościach strona nie jest odpowiednio zoptymalizowana. Pojawiają się delikatne błędy i nie dociągnięcia z powodu małej ilości czasu. Wszystko powinno zostac poprawione już nie długo. :)')
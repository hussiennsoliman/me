/*change background header*/

function scrollHeader () {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)





/*services*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtn = document.querySelectorAll('.services_icon'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal")
    
}      

modalBtn.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})



/*mixitup*/

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')

}

linkWork.forEach(L=> L.addEventListener('click', activeWork));


/*scroll section*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*light*/

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme =() => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () =>{

    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})











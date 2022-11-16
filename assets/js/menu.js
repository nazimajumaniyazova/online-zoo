const navbarMenu = document.querySelector('.header_navigation')
const burgerMenu = document.querySelector('.header__hamburger')
const overlayMenu =  document.querySelector('.menu-overlay')

if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
       burgerMenu.classList.toggle("is-active");
       navbarMenu.classList.toggle("is-active");
       overlayMenu.classList.toggle('overlay')
    });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".navigation__item").forEach((link) => {
    link.addEventListener("click", () => {
       burgerMenu.classList.remove("is-active");
       navbarMenu.classList.remove("is-active");
       overlayMenu.classList.remove('overlay')
    });
 });
//  window.onclick = function(event) {
//     if ( !event.target.closest('.header_navigation')  && event.target !=settingsButton) {
//         settingsList.classList.remove('active')
//     }
// }


// window.onclick = function(event) {
//     if ( !event.target.closest('.header')) {
//         burgerMenu.classList.remove("is-active");
//        navbarMenu.classList.remove("is-active");
//        overlayMenu.classList.remove('overlay')
//     }
//     // console.log(event.target.closest('.menu-overlay'))
//     // if (event.target.closest('.menu-overlay')) {
        
//     //     burgerMenu.classList.remove("is-active");
//     //    navbarMenu.classList.remove("is-active");
//     //    overlayMenu.classList.remove('overlay')
//     // }
    
// }
window.addEventListener('click',(event) => {
    if ( !event.target.closest('.header')) {
        burgerMenu.classList.remove("is-active");
       navbarMenu.classList.remove("is-active");
       overlayMenu.classList.remove('overlay')
    }
})
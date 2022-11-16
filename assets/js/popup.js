// POPUP
let resize = false;
const pageWidth = document.documentElement.scrollWidth
if(pageWidth <=640){
    resize = true;
}
window.addEventListener('resize', function(event) {
    const pageWidth = document.documentElement.scrollWidth
    if(pageWidth === 640){
        resize = true
        alert('по условиям ТЗ, пожалуйстаа перезагрузите страницу')
    }
});
const feedbacksContainer = document.querySelector('.feedbacks') 
const feedbacksOverlay = document.querySelector('.feedback-overlay') 
const feedbacksPopupList = document.querySelectorAll('.m-feedback')
const closeBtn = document.querySelectorAll('.icon-popup-close')
if(resize){
    
    feedbacksContainer.addEventListener('click', (event)=>{
            let eventTarget = event.target.closest('.feedback')
            let eventTargetNumber = eventTarget.getAttribute('data-number')
            let feedbackPopup = document.querySelector(`.mobile-testimonials [data-number="${eventTargetNumber}"]`)
    
            feedbacksPopupList.forEach(feedback=>{
                feedback.classList.remove('feedpack-popup')
            })
            feedbackPopup.classList.add('feedpack-popup')
            feedbacksOverlay.classList.add('feedback-overlay_active')
        }
    )
    closeBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            feedbacksPopupList.forEach(elem =>{
                elem.classList.remove('feedpack-popup')
            })
            feedbacksOverlay.classList.remove('feedback-overlay_active')
        })
    })
}

// window.onclick = function(event) {
//     if(event.target.closest('.feedback-overlay')){
//         feedbacksOverlay.classList.remove('feedback-overlay_active')
//        //feedbackPopup.classList.remove('feedpack-popup')
//        feedbacksPopupList.forEach(feedback=>{
//         feedback.classList.remove('feedpack-popup')
//     })
//     }
// }
window.addEventListener('click',(event) => {
    if(event.target.closest('.feedback-overlay')){
                feedbacksOverlay.classList.remove('feedback-overlay_active')
               //feedbackPopup.classList.remove('feedpack-popup')
               feedbacksPopupList.forEach(feedback=>{
                feedback.classList.remove('feedpack-popup')
            })
            }
})
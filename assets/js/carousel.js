// const petsContainer = document.querySelector(".pet-cards")
// const nextBtn = document.querySelector(".slider-next")
// const prevBtn = document.querySelector(".slider-prev")
// let width = petsContainer.offsetWidth;

// nextBtn.addEventListener('click', (e)=>{
//     carousel.scrollBy(width + gap, 0);
// })
// console.log(width)
let index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

let transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", (event)=>{
    let carousel = document.querySelector('.pet-cards');
    amount = document.querySelectorAll(".slide").length;

    moveOffset = parseInt(window.getComputedStyle(document.querySelector('.pet-cards__container')).width, 10);

    document.querySelector('.pet-cards').style.width = (amount * moveOffset) + 'px';

    for(var i = 0; i < amount; i++){
        currTransl[i] = -moveOffset;
        document.querySelectorAll(".pet-card")[i].addEventListener("transitionend", transitionCompleted, true);                    
        document.querySelectorAll(".pet-card")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        document.querySelectorAll(".pet-card")[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        document.querySelectorAll(".pet-card")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    }

    document.querySelector('.pet-cards').insertBefore(document.querySelector('.pet-cards').children[4], document.querySelector('.pet-cards').children[0])

    document.querySelector(".slider-prev").addEventListener('click', prev, true);
    document.querySelector(".slider-next").addEventListener('click', next, true);
})

function prev()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        index--;
        if (index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++)
        {
            var slide = document.querySelectorAll(".pet-card")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
            currTransl[i] = currTransl[i]+moveOffset;
        }
        var outerSlide = document.querySelectorAll(".pet-card")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
    }
}

function next()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        var outerIndex = (index) % amount;
        index++;
        for(var i = 0; i < amount; i++)
        {
            var slide = document.querySelectorAll(".pet-card")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
            currTransl[i] = currTransl[i]-moveOffset;
        }
        var outerSlide = document.querySelectorAll(".pet-card")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
    }
}
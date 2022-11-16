const donateRangeNumbers = document.querySelectorAll('.donate-range__num')
const donateRangeNumbersContainer = document.querySelector('.donate-range__numbers')
const amountInput = document.querySelector('.another-num input')
amountInput.value = document.querySelector('.donate-range__active .donate-range__num-value').textContent.slice(1)
const feedBtn = document.querySelector('.donate-info__content .btn')

donateRangeNumbersContainer.addEventListener('click',(event)=>{
    let eventTarget = event.target.closest('.donate-range__num')
    if(!eventTarget) return
    if(eventTarget.classList.contains('donate-range__num')){
        donateRangeNumbers.forEach(num =>{
            num.classList.remove('donate-range__active')
        })
        eventTarget.classList.add('donate-range__active')
        amountInput.value = eventTarget.querySelector('.donate-range__num-value').textContent.slice(1)
    }
})

amountInput.addEventListener('input',(evet)=>{
    if(amountInput.value > 9999 || amountInput.value <= 0 ){
        amountInput.value = amountInput.value.slice(0,4)
        return false
    }
    donateRangeNumbers.forEach(num =>{
        num.classList.remove('donate-range__active')
        if(num.querySelector('.donate-range__num-value').textContent.slice(1) === amountInput.value){
            donateRangeNumbers.forEach(elem =>{
                elem.classList.remove('donate-range__active')
            })
            num.classList.add('donate-range__active')
        }
    })
    console.log(amountInput.value)
})
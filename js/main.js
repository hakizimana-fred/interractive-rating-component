const rates = document.querySelectorAll('.rate')
const rateHolder = document.querySelector('.rate__holder')
const thankyouCard = document.querySelector('.thankyou-card')

const ln = rates.length
let selected;

rates.forEach(rate => rate.addEventListener('mousedown', handleRates))

function handleRates() {
    const btn = document.querySelector('button')
    this.classList.toggle('rate__active')
    const selected = parseInt(this.innerHTML)
    const textNode = `You selected ${selected} out of ${ln}`

    btn.addEventListener('click', function(){
        rateHolder.classList.add('d-none')
        document.querySelector('.text-selection').innerHTML=textNode
        thankyouCard.classList.remove('d-none')
    })    


}



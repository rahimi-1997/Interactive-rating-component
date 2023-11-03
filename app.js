const ratingSection = document.querySelector('.rating')
const stateSection = document.querySelector('.state')
const options = document.querySelectorAll('.opt')
const submitBtn = document.querySelector('#submit-btn')
const returnBtn = document.getElementById('return-btn')
const rating = document.getElementById('rating')
let rate = null;

options.forEach((opt) => {
    opt.addEventListener('click', (e) => {
        const active = document.querySelector('.checked')
        if(active) {
            active.classList.remove('checked')
        }
        e.target.classList.add('checked')
        rate = e.target.innerText
    })
})

submitBtn.addEventListener('click', () => {
    if(rate) {
        ratingSection.classList.add('hidden')
        stateSection.classList.remove('hidden')
        rating.innerText = rate
    }
    
})

returnBtn.addEventListener('click', () => {
    ratingSection.classList.remove('hidden')
    stateSection.classList.add('hidden')
    const active = document.querySelector(".checked");
    if (active) {
        active.classList.remove("checked");
    }
})

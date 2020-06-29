const cards = document.querySelectorAll('.card-image-container')
const cardsName = document.querySelectorAll('.card-name')
const authors = document.querySelectorAll('.author')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', () => {
        const type = card.getAttribute('id')
        const typeCardsName = document.querySelectorAll(`#${type}`).textContent
        console.log(typeCardsName)

        modal.classList.add('actived')
        modal.querySelector('img').src = `../assets/${type}.png`
        modal.querySelector('p').innerText = typeCardsName
        
    })
}

document.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('actived')
})
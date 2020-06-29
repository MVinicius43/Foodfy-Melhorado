const cards = document.querySelectorAll('.card-image-container')
const cardsName = document.querySelectorAll('.card-name')
const authors = document.querySelectorAll('.author')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', () => {
        const type = card.getAttribute('id')
        window.location.href = `/receita?id=${type}`   
        
    })
}

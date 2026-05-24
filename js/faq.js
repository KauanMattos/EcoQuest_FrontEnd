var aberto = -1
var itens = document.querySelectorAll('.faq__item')

function toggleFaq(indice) {
    if (aberto != -1) {
        itens[aberto].classList.remove('active')
    }

    if (aberto == indice) {
        aberto = -1
        return
    }

    itens[indice].classList.add('active')
    aberto = indice
}

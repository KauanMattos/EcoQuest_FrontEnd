var TARIFA = 4.40
var saldo = 0

function adicionar(pts) {
    saldo = saldo + pts

    var credito = saldo * 0.01
    var viagens = Math.floor(credito / TARIFA)

    document.getElementById('saldo-display').innerText = saldo
    document.getElementById('credito-display').innerText = 'R$ ' + credito.toFixed(2)
    document.getElementById('viagens-display').innerText = viagens
}

function converter() {
    var pts = parseInt(document.getElementById('pts-converter').value)
    var erro = document.getElementById('erro-converter')

    erro.textContent = ''

    if (pts < 440) {
        erro.textContent = 'Mínimo de 440 pontos (1 passagem).'
        return
    }

    if (pts > saldo) {
        erro.textContent = 'Saldo insuficiente. Saldo atual: ' + saldo + ' pts.'
        return
    }

    var credito = pts * 0.01
    var viagens = Math.floor(credito / TARIFA)

    saldo = saldo - pts

    document.getElementById('saldo-display').innerText = saldo
    document.getElementById('credito-display').innerText = 'R$ ' + (saldo * 0.01).toFixed(2)
    document.getElementById('viagens-display').innerText = Math.floor((saldo * 0.01) / TARIFA)

    alert('Crédito gerado: R$ ' + credito.toFixed(2) + ' — ' + viagens + ' viagens!')
    document.getElementById('pts-converter').value = ''
}

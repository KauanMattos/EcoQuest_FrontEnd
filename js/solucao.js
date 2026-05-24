var slider = document.getElementById('pontos-slider');
var displayPontos = document.getElementById('display-pontos');
var displayCredito = document.getElementById('display-credito');
var displayViagens = document.getElementById('display-viagens');
var displayCO2 = document.getElementById('display-co2');
var displayDias = document.getElementById('display-dias');

var TAXA_CREDITO = 0.01;
var TARIFA_VIAGEM = 4.40;
var CO2_POR_KM = 0.089;
var KM_POR_VIAGEM = 6;

function formatarReal(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarSimulador() {
    if (!slider) return;

    var pontos = parseInt(slider.value);
    var credito = pontos * TAXA_CREDITO;
    var viagens = Math.floor(credito / TARIFA_VIAGEM);
    var co2 = (viagens * KM_POR_VIAGEM * CO2_POR_KM).toFixed(2);

    if (displayPontos) displayPontos.textContent = pontos.toLocaleString('pt-BR');
    if (displayCredito) displayCredito.textContent = formatarReal(credito);
    if (displayViagens) displayViagens.textContent = viagens;
    if (displayCO2) displayCO2.textContent = co2 + ' kg';
    if (displayDias) displayDias.textContent = '~' + viagens + ' dias';
}

if (slider) {
    slider.addEventListener('input', atualizarSimulador);
    atualizarSimulador();
}

var botoesTab = document.querySelectorAll('.tabs__btn');
var conteudosTab = document.querySelectorAll('.tabs__content');

botoesTab.forEach(function (botao) {
    botao.addEventListener('click', function () {
        var alvo = botao.getAttribute('data-tab');

        botoesTab.forEach(function (b) { b.classList.remove('active'); });
        conteudosTab.forEach(function (c) { c.classList.remove('active'); });

        botao.classList.add('active');
        var conteudo = document.getElementById(alvo);
        if (conteudo) conteudo.classList.add('active');
    });
});

function enviar(evento) {
    evento.preventDefault()

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var assunto = document.getElementById('assunto').value
    var mensagem = document.getElementById('mensagem').value

    if (nome == '') {
        alert('Digite seu nome.')
        return
    }

    if (email == '') {
        alert('Digite seu e-mail.')
        return
    }

    if (email.indexOf('@') == -1) {
        alert('Digite um e-mail válido.')
        return
    }

    if (assunto == '') {
        alert('Selecione um assunto.')
        return
    }

    if (mensagem == '') {
        alert('Escreva sua mensagem.')
        return
    }

    alert('Mensagem enviada! Entraremos em contato em breve.')
    document.getElementById('form-contato').reset()
}

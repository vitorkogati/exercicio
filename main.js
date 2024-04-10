const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

form.addEventListener('submit', function(e) {
    let form = false;
    e.preventDefault();

    const valorNumeroA = parseInt(numeroA.value);
    const valorNumeroB = parseInt(numeroB.value);
    const mensagemDeSucesso = `Seu numero B é maior que A`;
    const mensagemDeErro = `Seu número B deve ser maior que A`;

    if (valorNumeroB > valorNumeroA) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = ('');
        numeroB.value = ('');
    } else { 
        const containerMensagemDeErro = document.querySelector('.error-message');
        containerMensagemDeErro.innerHTML = mensagemDeErro;
        containerMensagemDeErro.style.display = 'block';
    }

})

console.log(form);
function validarFormulario() {
    const nomeCompleto = document.querySelector('#nomeCompleto').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    if (nomeCompleto === '' || email === '' || senha === ''){
        alert('Por favor, preencha todos os campos')
    }else{
        const review = prompt('Confirme se suas informações estão corretas:' + '\n' + 'Nome Completo: ' + nomeCompleto + '\n' + 'E-mail: ' + email + '\n' + 'Senha: ' + senha);

        if (review.toLowerCase() === 'sim'){ 
            alert('Formulário enviado com sucesso!');
        }else if(review.toLowerCase() === 'nao'){
            alert('Por favor, revise suas informações e tente novamente.');
        }else{
            alert('Resposta inválida. Por favor, responda com "sim" ou "não".');
        }
    }
}
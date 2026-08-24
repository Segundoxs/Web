const form = document.getElementById('entre em contato');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;


    if (nome && email && mensagem) {
    
        console.log('Enviando dados:', { nome, email ,mensagem});
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
const botaoEnviar = document.getElementById('botaoEnviar');
botaoEnviar.addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    // Lógica de envio...
    console.log('Botão clicado, nome:', nome);
});   
document.getElementById('nome').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        // Simula o clique no botão de enviar ou dispara o submit do form
        document.getElementById('botaoEnviar').click();
    }
});   

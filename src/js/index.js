/*
    - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
        
        Passo 2 - identificar o clique no botão 
       
        Passo 3 - adicionar a classe ativo nos projetos escondidos 

    Objetivo 2 - esconder o botão de mostrar mais 
         Passo 1 - pegar o botão e esconder ele 
*/

//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
const botaoMostraProjetos = document.querySelector('.btn-mostra-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostraProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostraMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais 
    // Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});

function mostraMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostraProjetos.classList.add("remover");
}

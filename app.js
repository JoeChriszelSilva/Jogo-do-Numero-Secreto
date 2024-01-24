let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});

}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um Numero de 1 a 10');
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
   if( chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagensTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagensTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
    if(chute > numeroSecreto){
        exibirTextoNaTela('p','O numero secretor e menor');
    }else{
        exibirTextoNaTela('p','O numero secreto e maior');
    }
    tentativas++
    limparCampo();
}
   }
   

function gerarNumeroAletorio(){
    let numeroEscolhido = parseInt(Math.random()* 4 + 1);
    let quantidadeDeelementosNaLista = listaDeNumerosSorteados.length;
   
    if (quantidadeDeelementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAletorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;

    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

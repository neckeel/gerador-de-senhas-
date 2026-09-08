constnumeroSenha = document.querySelector('.parametro-senha__textos');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas =  'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#*?*%';
const botoes = document.querySelectorAll('parametro-senha_-botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');

botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumentatamanho;

function diminuiTamanho(){
    if(tamanhoSenha> 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhosenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

functionaumnetaTamanho(){
    if(tamanhoSenha< 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


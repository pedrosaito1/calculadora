//Pegando os valores digitados 
function inserir(novoNum) {
    const numero = document.querySelector("#res").innerHTML;
    document.querySelector("#res").innerHTML = numero + novoNum
}

//Limpando a tela inteira
function limpar() {
    document.querySelector("#res").innerHTML = "";
}

//Apagando um caractere
function backspace() {
    const res = document.querySelector("#res").innerHTML;
    document.querySelector("#res").innerHTML = res.substring(0, res.length -1);
}

//Fazendo o calculo
function calcular() {
    const res = document.querySelector("#res").innerHTML;
    if(res) {
        document.querySelector("#res").innerHTML = eval(res)
    } 
}
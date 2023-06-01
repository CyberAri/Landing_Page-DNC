var setaDireita = window.document.getElementById("set-direita")
var setaEsquerda = window.document.getElementById("set-esquerda")

var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}   
    
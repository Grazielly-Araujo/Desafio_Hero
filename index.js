/* UTILIZANDO IF ELSE PARA TOMAR DECISÕES */

let jogador = "hae-in"
let xp = 11000

if(xp <= 1000){
    console.log("O Herói de nome " + jogador + " está no nível Ferro")
} else if (xp <= 2000){
    console.log("O Herói de nome " + jogador + " está no nível Bronze")
} else if (xp <= 5000){
    console.log("O Herói de nome " + jogador + " está no nível Prata")
} else if (xp <= 7000){
    console.log("O Herói de nome " + jogador + " está no nível Ouro")
} else if (xp <= 8000){
    console.log("O Herói de nome " + jogador + " está no nível Platina")
} else if (xp <= 9000){
    console.log("O Herói de nome " + jogador + " está no nível Ascendente")
}else if (xp <= 10000){
    console.log("O Herói de nome " + jogador + " está no nível Imortal")
}else{
    console.log("O Herói de nome " + jogador + " está no nível Radiante")
}

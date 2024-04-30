/* UTILIZANDO SWITCH PARA TOMAR DECISÕES */

let jogador = "hae-in"
let xp = 1100
const text = " O Herói de nome " + jogador + " está no nível "


switch (true){
    case xp <= 1000:
    console.log(text + "Ferro")
    break

    case xp <= 2000:
    console.log(text + "Bronze" )
    break

    case xp <= 5000:
    console.log(text + "Prata" )
    break

    case xp <= 7000:
    console.log(text + "Ouro" )
    break

    case xp <= 8000:
    console.log(text + "Platina")
    break

    case xp <= 9000:
    console.log(text + "Ascendente" )
    break

    case xp <= 10000:
    console.log(text + "Imortal")
    break

    default:
        console.log(text + "Radiante")

}



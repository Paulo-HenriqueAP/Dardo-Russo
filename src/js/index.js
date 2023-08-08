let municao = document.getElementById("dardo");

let arma = document.getElementById("arma");

let qualArma = 0;

let podeAtirar = false;

let somAtual = document.getElementById("som");

let totalMunicao_naArma = 0;

let vaiDisparar = false;

let tC = 0;

let tV = 10;

let resultado = document.getElementById("destino")

let esvaziar = false

const armas = [
    {
        carregada: "src/armas/arma1/carregada.png", descarregada: "src/armas/arma1/descarregada.png", carregada_0: "src/armas/arma1/carregada_0.png", municao: "src/armas/arma1/dardo.png", classe: "pequena", vazio: "src/armas/arma1/audio/vazio.m4a", colocandoM: "src/armas/arma1/audio/colocando_municao.m4a", disparo: "src/armas/arma1/audio/disparo.m4a", prontoD: "src/armas/arma1/audio/pronto.m4a", preCarregada: "src/armas/arma1/Precarregada.png", comprada: "s"
    },

    {
        carregada: "src/armas/arma2/carregada.png", descarregada: "src/armas/arma2/descarregada.png", carregada_0: "src/armas/arma2/carregada_0.png", municao: "src/armas/arma2/dardo.png", classe: "media",
        vazio: "src/armas/arma2/audio/vazio.m4a", colocandoM: "src/armas/arma2/audio/colocando_municao.m4a", disparo: "src/armas/arma2/audio/disparo.m4a", prontoD: "src/armas/arma2/audio/pronto.m4a", preCarregada: "src/armas/arma2/Precarregada.png", comprada: "n"
    },

    {
        carregada: "src/armas/arma3/carregada.png", descarregada: "src/armas/arma3/descarregada.png", carregada_0: "src/armas/arma3/carregada.png", municao: "src/armas/arma3/dardo.png", classe: "pequena", vazio: "src/armas/arma3/audio/vazio.m4a", colocandoM: "src/armas/arma3/audio/colocando_municao.m4a", disparo: "src/armas/arma3/audio/disparo.m4a", prontoD: "src/armas/arma3/audio/pronto.m4a", preCarregada: "src/armas/arma3/carregada.png", comprada: "n"
    },

    {
        carregada: "src/armas/arma4/carregada.png", descarregada: "src/armas/arma4/descarregada.png", carregada_0: "src/armas/arma4/carregada.png", municao: "src/armas/arma4/dardo.png", classe: "grande", vazio: "src/armas/arma4/audio/vazio.m4a", colocandoM: "src/armas/arma4/audio/colocando_municao.m4a", disparo: "src/armas/arma4/audio/disparo.m4a", prontoD: "src/armas/arma4/audio/pronto.m4a", preCarregada: "src/armas/arma4/carregada.png", comprada: "n"
    },

    {
        carregada: "src/armas/arma5/carregada.png", descarregada: "src/armas/arma5/descarregada.png", carregada_0: "src/armas/arma5/carregada.png", municao: "src/armas/arma5/dardo.png", classe: "media", vazio: "src/armas/arma5/audio/vazio.m4a", colocandoM: "src/armas/arma5/audio/colocando_municao.m4a", disparo: "src/armas/arma5/audio/disparo.m4a", prontoD: "src/armas/arma5/audio/pronto.m4a", preCarregada: "src/armas/arma5/Precarregada.png", comprada: "n"
    },

    {
        carregada: "src/armas/arma6/descarregada.png", descarregada: "src/armas/arma6/descarregada.png", carregada_0: "src/armas/arma6/descarregada.png", municao: "src/armas/arma6/dardo.png", classe: "pequena", vazio: "src/armas/arma6/audio/vazio.m4a", colocandoM: "src/armas/arma6/audio/colocando_municao.m4a", disparo: "src/armas/arma6/audio/disparo.m4a", prontoD: "src/armas/arma6/audio/pronto.m4a", preCarregada: "src/armas/arma6/Precarregada.png", comprada: "n"
    }
];

function carregarRecurusos() {
    for (let P = 0; P < 6; P++) {

        let imagemP1 = new Image()
        let imagemP2 = new Image()
        let imagemP3 = new Image()
        let imagemP4 = new Image()

        imagemP1.src = armas[P].carregada
        imagemP2.src = armas[P].descarregada
        imagemP3.src = armas[P].carregada_0
        imagemP4.src = armas[P].municao


        let audioP1 = new Audio()
        let audioP2 = new Audio()
        let audioP3 = new Audio()
        let audioP4 = new Audio()

        audioP1.src = armas[P].vazio
        audioP2.src = armas[P].colocandoM
        audioP3.src = armas[P].disparo
        audioP4.src = armas[P].prontoD

    }

    const fim1 = new Image()
    const fim2 = new Audio()

    fim1.src = "src/gameOver.jpg"
    fim2.src = "src/tiroFinal.m4a"
};

carregarRecurusos()
inicio_trocarArma()

function inicio_trocarArma() {
    limpar()
    atualizar_Creditos_Vidas()

    switch (qualArma) {
        case 0:
            document.getElementById("pistola").style = "background-color: purple;"
            break;
        case 1:
            document.getElementById("escopeta").style = "background-color: purple;"
            break;
        case 2:
            document.getElementById("pistolaG").style = "background-color: purple;"
            break;
        case 3:
            document.getElementById("m4").style = "background-color: purple;"
            break;
    }
    totalMunicao_naArma = 0;
    podeAtirar = false;
    document.getElementById("pente_carreguei").classList.remove("bloquear")
    document.getElementById("armaBotao").classList.add(armas[qualArma].classe)
    arma.setAttribute("src", armas[qualArma].descarregada)
    municao.setAttribute("src", armas[qualArma].municao)
    document.body.style = " background-color: #F5F5F5;"
}

municao.addEventListener("click", function () {
    arma.setAttribute("src", armas[qualArma].preCarregada)
    municao.setAttribute("src", "")
    som.setAttribute("src", armas[qualArma].colocandoM)
    totalMunicao_naArma++
    podeAtirar = false
    document.getElementById("pente_carreguei").classList.remove("bloquear")

    if (totalMunicao_naArma === 2) {
        return;
    }

    switch (qualArma) {
        case 4:
            municao.setAttribute("src", armas[qualArma].municao)
            break;
        case 5:
            municao.setAttribute("src", armas[qualArma].municao)
            break;
    }
});

function limpar() {
    document.getElementById("armaBotao").classList.remove("pequena")
    document.getElementById("armaBotao").classList.remove("media")
    document.getElementById("armaBotao").classList.remove("grande")
    document.getElementById("pistola").style = "background-color: steelblue;"
    document.getElementById("escopeta").style = "background-color: steelblue;"
    document.getElementById("pistolaG").style = "background-color: steelblue;"
    document.getElementById("m4").style = "background-color: steelblue;"
    document.getElementById("pistola").classList.remove("bloquear")
    document.getElementById("escopeta").classList.remove("bloquear")
    document.getElementById("escopetaP").classList.remove("bloquear")
    document.getElementById("pistolaG").classList.remove("bloquear")
    document.getElementById("pistola").classList.remove("bloquear")
    document.getElementById("revolver").classList.remove("bloquear")
    document.getElementById("m4").classList.remove("bloquear")
}

function atualizar_Creditos_Vidas() {
    document.getElementById("Tc").textContent = "🎫 " + tC
    document.getElementById("totalVidas").textContent = "❤️ " + tV

    switch (tV) {
        case 0:
            if (tC >= 1) {
                document.getElementById("vida").textContent = "Vida ❤️ = " + tC + " 🎫"
                document.getElementById("totalVidas").classList.remove("morrendo")
                document.getElementById("totalVidas").textContent = "👻"
                resultado.textContent = "VOCÊ VAI MORRER!"
                document.getElementById("trocar").classList.add("morrendo")
                municao.setAttribute("src", "")
                document.getElementById("pistola").classList.add("bloquear")
                document.getElementById("escopeta").classList.add("bloquear")
                document.getElementById("escopetaP").classList.add("bloquear")
                document.getElementById("pistolaG").classList.add("bloquear")
                document.getElementById("pistola").classList.add("bloquear")
                document.getElementById("revolver").classList.add("bloquear")
                document.getElementById("m4").classList.add("bloquear")
                esvaziar = true
            } else {
                gameOver()
            }
            break;
        case 1:
            document.getElementById("totalVidas").textContent = "🖤 " + tV
            document.getElementById("totalVidas").classList.add("morrendo")
            break;
        case 2:
            document.getElementById("totalVidas").textContent = "❤️‍🩹 " + tV
            document.getElementById("totalVidas").classList.remove("morrendo")
            break
    }
}

function abrirFechar_Armas() {
    document.getElementById("armasDesbloqueadas").classList.toggle("hidden")
    document.getElementById("trocar").classList.toggle("hidden")
};

function trocarP() {
    qualArma = 0
    inicio_trocarArma()
};

function trocarE() {
    if (tC < 3 && armas[1].comprada === "n") {
        NaoComprou = "escopeta"
        NaocomprouArma()
        return;
    }

    switch (armas[1].comprada) {
        case "n":
            tC -= 3
            document.getElementById("escopeta").textContent = "Escopeta"
            armas[1].comprada = "s"
            break;
    }

    qualArma = 1
    inicio_trocarArma()
};

function trocarPg() {
    if (tC < 5 && armas[2].comprada === "n") {
        NaoComprou = "pistolaG"
        NaocomprouArma()
        return
    }
    switch (armas[2].comprada) {
        case "n":
            tC -= 5
            document.getElementById("pistolaG").textContent = "Pistola"
            armas[2].comprada = "s"
            break;
    }
    qualArma = 2
    inicio_trocarArma()
}

function trocarEp() {
    if (tC < 6 && armas[5].comprada === "n") {
        NaoComprou = "escopetaP"
        NaocomprouArma()
        return
    }
    switch (armas[5].comprada) {
        case "n":
            tC -= 6
            document.getElementById("escopetaP").textContent = "Escopeta CS"
            armas[5].comprada = "s"
            break;
    }
    qualArma = 5
    inicio_trocarArma()
}

function trocarR() {
    if (tC < 7 && armas[4].comprada === "n") {
        NaoComprou = "revolver"
        NaocomprouArma()
        return
    }
    switch (armas[4].comprada) {
        case "n":
            tC -= 7
            document.getElementById("revolver").textContent = "Revólver"
            armas[4].comprada = "s"
            break;
    }
    qualArma = 4
    inicio_trocarArma()
}

function trocarM() {
    if (tC < 9 && armas[3].comprada === "n") {
        NaoComprou = "m4"
        NaocomprouArma()
        return
    }

    switch (armas[3].comprada) {
        case "n":
            tC -= 9
            document.getElementById("m4").textContent = "M4"
            armas[3].comprada = "s"
            break;
    }

    qualArma = 3
    inicio_trocarArma()
};

function add_vida() {
    if (tC < 1) {
        NaoComprou = "vida"
        NaocomprouArma()
        return
    }

    document.getElementById("vida").style = "background-color: #5fdf69;"
    setTimeout(function () {
        document.getElementById("vida").style = "steelblue;"
    }, 600)

    switch (esvaziar) {
        case true:
            tC = 0
            tV = 1
            esvaziar = false
            resultado.textContent = ""
            break;
        default:
            tC -= 1
            tV++
            break;
    }
    document.getElementById("trocar").classList.remove("morrendo")
    document.getElementById("vida").textContent = "Vida ❤️ = 1 🎫"
    atualizar_Creditos_Vidas()
    inicio_trocarArma()
};

function NaocomprouArma() {
    document.getElementById(NaoComprou).classList.add("semC")

    setTimeout(function () {
        document.getElementById(NaoComprou).classList.remove("semC")
    }, 600)
}

function carregado() {
    podeAtirar = true
    document.getElementById("pente_carreguei").classList.add("bloquear")
    definirTipo_disparo()
    arma.setAttribute("src", armas[qualArma].carregada)
    som.setAttribute("src", armas[qualArma].prontoD)

    switch (totalMunicao_naArma) {
        case 0:
            arma.setAttribute("src", armas[qualArma].carregada_0)
            break;
    }

    resultado.textContent = ""
    definirTipo_disparo()
};

function girarArma() {
    arma.style = "transform: rotate(-0.50turn);"
    setTimeout(function () {
        arma.style = "transform: rotate(-0turn);"
    }, 200)

    definirTipo_disparo()
}


function definirTipo_disparo() {
    S_N = Math.floor(Math.random() * 999)

    if (S_N % 2 === 0) {
        vaiDisparar = true
    } else {
        vaiDisparar = false
    }
}

function atirar() {
    switch (totalMunicao_naArma) {
        case 0:
            som.setAttribute("src", armas[qualArma].vazio)
            arma.setAttribute("src", armas[qualArma].descarregada)
            document.getElementById("pente_carreguei").classList.remove("bloquear")
            return;
    }

    if (podeAtirar === false) {
        document.getElementById("pente_carreguei").classList.add("semPuxar")
        setTimeout(function () {
            document.getElementById("pente_carreguei").classList.remove("semPuxar")
        }, 300)
        return;
    }

    document.body.style = "background-color = black"
    document.body.classList.add("escuro")

    setTimeout(function () {
        document.body.classList.remove("escuro")

        switch (vaiDisparar) {
            case true:
                som.setAttribute("src", armas[qualArma].disparo)
                resultado.textContent = "DISPAROU"
                document.body.style = "background-color: #8a0303;"
                tV--
                atualizar_Creditos_Vidas()
                break;
            case false:
                som.setAttribute("src", armas[qualArma].vazio)
                resultado.textContent = "CLICK"
                document.body.style = "background-color: #5fdf69;"
                tC++
                atualizar_Creditos_Vidas()
                break;
        }
    }, 1000)

    if (totalMunicao_naArma >= 2) {
        totalMunicao_naArma = 1
        setTimeout(function () {
            definirTipo_disparo()
            atirar()
        }, 2000)

    } else {
        document.getElementById("pente_carreguei").classList.remove("bloquear")
        arma.setAttribute("src", armas[qualArma].descarregada)
        municao.setAttribute("src", armas[qualArma].municao)
        podeAtirar = false
        totalMunicao_naArma = 0
    }
}

function gameOver() {
    document.getElementById("armaBotao").classList.remove("pequena")
    document.getElementById("armaBotao").classList.remove("media")
    document.getElementById("armaBotao").classList.remove("grande")
    document.getElementById("armaBotao").classList.add("over")
    arma.setAttribute("src", "src/gameOver.jpg")
    document.getElementById("armaBotao").classList.add("bloquear")
    document.getElementById("trocar").classList.add("bloquear")
    document.getElementById("girar").classList.add("bloquear")
    document.getElementById("pente_carreguei").classList.add("bloquear")
    document.getElementById("armasDesbloqueadas").classList.add("bloquear")
    resultado.textContent = "GAME OVER"
    municao.setAttribute("src", "")
    document.getElementById("mun").textContent = "REINICIAR"
    document.getElementById("mun").classList.add("reiniciar")
    document.getElementById("totalVidas").textContent = "☠️ 0"
    document.getElementById("totalVidas").classList.remove("morrendo")
    document.getElementById("mun").addEventListener("click", () => {
        location.reload()
    })

    setTimeout(function () {
        document.body.style = "background-color = black"
        document.body.classList.add("escuro")
        som.setAttribute("src", "src/tiroFinal.m4a")
        setTimeout(function () {
            location.reload()
        }, 4000)
    }, 10000)
}
const botaoNao = document.getElementById("nao");

function fugir() {

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const margem = 20;

    const maxX = larguraTela - larguraBotao - margem;
    const maxY = alturaTela - alturaBotao - margem;

    const x =
        Math.random() * (maxX - margem) + margem;

    const y =
        Math.random() * (maxY - margem) + margem;

    botaoNao.style.position = "fixed";

    botaoNao.style.left = `${x}px`;

    botaoNao.style.top = `${y}px`;
}


/* Computador */

botaoNao.addEventListener(
    "mouseenter",
    fugir
);


/* Celular */

botaoNao.addEventListener(
    "touchstart",
    function (evento) {

        evento.preventDefault();

        fugir();

    }
);

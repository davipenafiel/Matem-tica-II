
document.getElementById("botao-mais-info").addEventListener("click", function() {
    var maisInfo = document.getElementById("mais-info");
    var botao = document.getElementById("botao-mais-info");
    if (maisInfo.getAttribute("aria-hidden") === "true") {
        maisInfo.setAttribute("aria-hidden", "false");
        maisInfo.style.display = "block";
        botao.setAttribute("aria-expanded", "true");
    } else {
        maisInfo.setAttribute("aria-hidden", "true");
        maisInfo.style.display = "none";
        botao.setAttribute("aria-expanded", "false");
    }
});
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })
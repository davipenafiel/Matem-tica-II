
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

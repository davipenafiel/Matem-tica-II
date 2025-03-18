document.addEventListener("DOMContentLoaded", Function (){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualfonte = 1;

    aumentaFonteBotao.addEventListener("click", function(){
        tamanhoAtualfonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualfonte}rem`
    })

    diminuiFonteBotao.addEventListener("click", function(){
        tamanhoAtualfonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualfonte}rem`
    }
})
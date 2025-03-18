document.addEventListener("DOMContentLoaded", Function (){
    const aumentafontebotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualfonte = 1;

    aumentafontebotao.addEventListener("click", function(){
        tamanhoAtualfonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualfonte}rem`
    })
})
let tamanhoAtual = 16;

document.addEventListener('DOMContentLoaded', function() {
    const htmlStyle = window.getComputedStyle(document.documentElement);
    tamanhoAtual = parseInt(htmlStyle.fontSize) || 16;
    
    const btnAumentar = document.getElementById('aumentar');
    const btnDiminuir = document.getElementById('diminuir');
    
    if (btnAumentar) {
        btnAumentar.addEventListener('click', aumentarFonte);
    }
    
    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', diminuirFonte);
    }
});

function aumentarFonte() {
    tamanhoAtual += 2;
    document.documentElement.style.fontSize = tamanhoAtual + "px";
    document.body.style.fontSize = tamanhoAtual + "px";
}

function diminuirFonte() {
    if (tamanhoAtual <= 12) return;
    
    tamanhoAtual -= 2;
    document.documentElement.style.fontSize = tamanhoAtual + "px";
    document.body.style.fontSize = tamanhoAtual + "px";
}
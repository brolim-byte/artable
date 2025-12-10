// Variáveis globais
let tamanhoAtual = 16;

// Inicializa quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Pega o tamanho atual do elemento html (root)
    const htmlStyle = window.getComputedStyle(document.documentElement);
    tamanhoAtual = parseInt(htmlStyle.fontSize) || 16;
    
    // Conecta os botões aos eventos
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
    // Altera o fontSize do elemento html (root) para afetar todos os rem
    document.documentElement.style.fontSize = tamanhoAtual + "px";
    // Também altera o body para garantir
    document.body.style.fontSize = tamanhoAtual + "px";
}

function diminuirFonte() {
    // Limite mínimo de 12px
    if (tamanhoAtual <= 12) return;
    
    tamanhoAtual -= 2;
    // Altera o fontSize do elemento html (root) para afetar todos os rem
    document.documentElement.style.fontSize = tamanhoAtual + "px";
    // Também altera o body para garantir
    document.body.style.fontSize = tamanhoAtual + "px";
}
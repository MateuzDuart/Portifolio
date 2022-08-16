var b_voltar = document.querySelector('#voltar')
var b_proseguir = document.querySelector('#proseguir')
var documentos = document.querySelectorAll('article.arquivos')

b_voltar.addEventListener('click', voltar)
b_proseguir.addEventListener('click', proseguir)
documento_visivel = 0
function voltar() {
    documento_visivel--
    if (documentos.length - 1 == documento_visivel + 1) {
        b_proseguir.style.display = 'unset'
    }
    if (documento_visivel == 0) {
        b_voltar.style.display = 'none'
    }
    documentos.forEach(element => {
        element.style.display = 'none'
    })
    documentos[documento_visivel].style.display = 'unset'
}
function proseguir() {
    documento_visivel++
    b_voltar.style.display = 'unset'
    if (documentos.length == documento_visivel + 1) {
        b_proseguir.style.display = 'none'
    }
    documentos.forEach(element => {
        element.style.display = 'none'
    })
    documentos[documento_visivel].style.display = 'unset'
}
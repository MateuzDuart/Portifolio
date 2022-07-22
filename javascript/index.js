window.sr = ScrollReveal({reset: true})
ScrollReveal().reveal('#sobre', { delay: 250 })
ScrollReveal().reveal('#tecnologias', { delay: 250 })
ScrollReveal().reveal('#projetos', { delay: 250 })

var marca_texto = document.querySelector('.marca-texto')
var corpo = document.body

marca_texto.addEventListener('mousedown', pegar_marca_texto)
marca_texto.addEventListener('touchstart', pegar_marca_texto)

function trocar_cor(e) {
    console.log()
}

function pegar_marca_texto() {

    marca_texto.addEventListener('mousemove', posicao_mouse)
    marca_texto.addEventListener('touchmove', posicao_mouse)
    marca_texto.addEventListener('mouseup', solta_marca_texto)
    marca_texto.addEventListener('touchend', solta_marca_texto)
    function posicao_mouse(e) {
        var x = e.clientX - 50 + 'px'
        if (x == 'NaNpx') {
            corpo.style.overflow = 'hidden'
            x = e.changedTouches[0].clientX - 30 + 'px'
            var y = e.changedTouches[0].clientY - 500 + 'px'
        } else {
            x = e.clientX - 550 + 'px'
            var y = e.clientY - 250 + 'px'
        }
        this.style.left = x
        this.style.top = y
    }

    function solta_marca_texto() {
        corpo.style.overflow = 'unset'
        this.style.right = '70vw !mportant'
        marca_texto.removeEventListener('mousemove', posicao_mouse)
        marca_texto.removeEventListener('a',posicao_mouse)
    }
}

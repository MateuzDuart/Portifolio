window.sr = ScrollReveal({reset: true})
ScrollReveal().reveal('#sobre', { delay: 250 })
ScrollReveal().reveal('#tecnologias', { delay: 250 })
ScrollReveal().reveal('#projetos', { delay: 250 })

var marca_texto = document.querySelector('.marca-texto')
var sesao_sobre = document.querySelector('#sobre')
var sesao_inicio = document.querySelector('#inicio')
var sesao_tecnologia = document.querySelector('#tecnologias')
var corpo = document.body

sesao_sobre.addEventListener('mousemove', apresentar_elemento)
sesao_sobre.addEventListener('touchmove', apresentar_elemento)
marca_texto.addEventListener('mousedown', pegar_marca_texto)
marca_texto.addEventListener('touchstart', pegar_marca_texto)
sesao_sobre.addEventListener('mouseout', esconder_elemento)
sesao_inicio.addEventListener('touchmove', esconder_elemento)
sesao_tecnologia.addEventListener('touchmove', esconder_elemento)

function apresentar_elemento() {
    marca_texto.style.display = 'unset'
    marca_texto.style.animationName = 'slide-marca-texto'
}

function esconder_elemento() {
    marca_texto.style.animationName = 'fecha-marca-texto'
}

function pegar_marca_texto() {
    marca_texto.addEventListener('mousemove', posicao_mouse)
    marca_texto.addEventListener('touchmove', posicao_mouse)
    marca_texto.addEventListener('mouseup', solta_marca_texto)
    marca_texto.addEventListener('touchend', solta_marca_texto)
    function posicao_mouse(e) {
        console.log(e)
        var x = e.clientX - 50 + 'px'
        if (x == 'NaNpx') {
            corpo.style.overflow = 'hidden'
            x = e.changedTouches[0].clientX - 50 + 'px'
            var y = e.changedTouches[0].clientY - 50 + 'px'
        } else {
            x = e.clientX - 50 + 'px'
            var y = e.clientY - 50 + 'px'
        }
        this.style.left = x
        this.style.top = y
    }

    function solta_marca_texto() {
        corpo.style.overflow = 'unset'
        this.style.left = 'unset'
        marca_texto.removeEventListener('mousemove', posicao_mouse)
        marca_texto.removeEventListener('a',posicao_mouse)
    }
}

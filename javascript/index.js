window.sr = ScrollReveal({reset: false})
ScrollReveal().reveal('#sobre', { delay: 250 })
ScrollReveal().reveal('#tecnologias', { delay: 250 })
ScrollReveal().reveal('#projetos', { delay: 250 })
VanillaTilt.init(document.querySelector(".vidro"), {
    max: 2,
    speed: 400,
    glare: true,
    "max-glare": 0.5
})


var marca_texto = document.querySelector('.marca-texto')
var sesao_sobre = document.querySelector('#sobre')
var sesao_inicio = document.querySelector('#inicio')
var sesao_tecnologia = document.querySelector('#tecnologias')
var corpo = document.body
var infos = document.querySelectorAll('.ocultar-informacao')
var elem_info = 0
var info_visivel = false
var mostrando = false
var arvore_tec = document.getElementById('arvore')
var linha_desenhos = document.querySelector('.linha')
var background = document.querySelector('.background')

sesao_sobre.addEventListener('mousemove', apresentar_elemento)
sesao_sobre.addEventListener('touchmove', apresentar_elemento)
marca_texto.addEventListener('mousedown', pegar_marca_texto)
marca_texto.addEventListener('touchstart', pegar_marca_texto)
sesao_sobre.addEventListener('mouseout', esconder_elemento)
sesao_inicio.addEventListener('touchmove', esconder_elemento)
sesao_tecnologia.addEventListener('touchmove', esconder_elemento)
arvore_tec.addEventListener('load', criar_arvore(arvore_tec))

function puxar_tec() {
    var f_tecnologias = document.querySelectorAll('.f-tecnologia')
    f_tecnologias.forEach(function(elemento){
        elemento.addEventListener('click', mostrar_info)
    })
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

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

function esconder_info() {
    let areas3d = document.querySelector('.area3d')
    areas3d.style.animationName = 'e-para-d'
    let filhos_area3d = areas3d.children
    for (let i = 0 ; i < filhos_area3d.length; i++){
        filhos_area3d.item(i).style.animationName = 'puxar'
    }
    sleep(1000).then(() => {
        let elens_info = document.querySelectorAll('.informacao')
        elens_info.forEach(
            function(elemento) {
                if (!mostrando){
                    elemento.style.display = 'none'
                }
                for (let i = 0 ; i < filhos_area3d.length; i++){
                    filhos_area3d.item(i).style.animationName = 'unset'
                }
            }
        )
    })
    info_visivel = false
    console.log('elemento invisivel')
}

function mostrar_info(e) {
    console.log(mostrando)
        if (info_visivel && !mostrando) {
            console.log('ocultou')
            esconder_info()
            info_visivel = false
        } else if (!info_visivel && !mostrando) {
            mostrando = true
            let elem_class = e.path[0].className.baseVal.split(' ')[0].replace('f-','')
            let areas3d = document.querySelectorAll('.area3d')
            let elem_info = document.querySelector(`#info-${elem_class}`)
            let filhos_area3d = areas3d[0].children
            for (let i = 0 ; i < filhos_area3d.length; i++){
                filhos_area3d.item(i).style.display = 'none'
            }
            try {
                elem_info.style.display = 'block'
            } catch {
                mostrando = false
                return 'elemento nao tem informação'
            }
            areas3d.forEach(function(elemento){
                elemento.style.animationName = 'puxar-info'
            })
            for (let i = 0 ; i < filhos_area3d.length; i++){
                filhos_area3d.item(i).style.animationName = 'unset'
            }
            info_visivel = true
            sleep(2000).then(() => {
                mostrando = false
            })
        }
        
}

infos.forEach(function(elemento){
    elemento.addEventListener('click', esconder_info)
})


function criar_arvore (e) {
    fetch(e.src).then((resp) => {
        resp.text().then((resp) => {
            const span = document.createElement('span')
            span.innerHTML = resp
            const inlineSvg = span.querySelector('svg')
            inlineSvg.id = e.id        
            e.parentNode.replaceChild(inlineSvg, e)
            puxar_tec()
            return true
        })
    })

}

function replicar() {
    for (let i = 0; i < 18; i++) {
        background.appendChild(linha_desenhos.cloneNode(true))
        
    }
}

replicar()
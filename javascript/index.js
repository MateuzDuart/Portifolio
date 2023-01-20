window.sr = ScrollReveal({reset: false})
ScrollReveal().reveal('#sobre', { delay: 250 })
ScrollReveal().reveal('#tecnologias', { delay: 250 })
ScrollReveal().reveal('#projetos', { delay: 250 })
ScrollReveal().reveal('#habilidades', { delay: 250 })
VanillaTilt.init(document.querySelector(".vidro"), {
    max: 2,
    speed: 400,
    glare: true,
    "max-glare": 0.5
})



var sesao_sobre = document.querySelector('#sobre')
var sesao_inicio = document.querySelector('#inicio')
var sesao_tecnologia = document.querySelector('#tecnologias')
var corpo = document.body
var infos = document.querySelectorAll('.ocultar-informacao')
var elem_info = 0
var info_visivel = false
var mostrando = false
var arvore_tec = document.getElementById('arvore')
var habilidades = document.getElementById('lista-habilidades')
var linha_desenhos = document.querySelector('.linha')
var background = document.querySelector('.background')

arvore_tec.addEventListener('load', criar_arvore(arvore_tec))
habilidades.addEventListener('load', criar_arvore(habilidades))

function puxar_tec() {
    var f_tecnologias = document.querySelectorAll('.f-tecnologia')
    f_tecnologias.forEach(function(elemento){
        elemento.addEventListener('click', mostrar_info)
    })
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
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
}

function mostrar_info(e) {
        if (info_visivel && !mostrando) {
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

let slide = 0

function projeto_ilimita() {
    document.querySelector('.info-caixa').classList.toggle('ativado')
    document.querySelector('.fechar').classList.toggle('ativado')
    document.querySelectorAll('.seta-slider').forEach((e) => {
        e.classList.toggle('ativado')
    }
    )
}
document.querySelector('.proj3').onclick = projeto_ilimita

document.querySelector('.fechar').onclick = projeto_ilimita

function id_seta(num) {
    document.querySelector('.seta-slider.l').href = `#c${num + 1}`
    document.querySelector('.seta-slider.r').href = `#c${num + 1}`
} 

document.querySelector('.seta-slider.l').onclick = function() {
    if (slide > 0){
        slide--
        id_seta(slide)
    }
}

document.querySelector('.seta-slider.r').onclick = function() {
    if (slide < 4) {
        slide++
        id_seta(slide)
    }      
}
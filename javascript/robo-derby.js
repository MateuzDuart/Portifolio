

function montar_svg(e) {
    console.log('entrou')
    fetch(e.src).then((resp) => {
        resp.text().then((resp) => {
            const span = document.createElement('span')
            span.innerHTML = resp
            const inlineSvg = span.querySelector('svg')
            inlineSvg.classList.add("bg");
            inlineSvg.id = e.id        
            e.parentNode.replaceChild(inlineSvg, e)
            return true
        })
    })
}

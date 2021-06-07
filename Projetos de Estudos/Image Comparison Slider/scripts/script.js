const slider = document.querySelector(".slider input")
const dragLine = document.querySelector(".slider .drag-line")
const img1  = document.querySelector(".images .img-1")
const img2  = document.querySelector(".images .img-2")

const btnChange = document.querySelector(".btn-alt-img button")

// Make dragLine Move and changing image
slider.oninput = ()=> {
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%"
    img2.style.width = sliderVal + "%"
}

// Change img-1 and img-2
btnChange.onclick = ()=> {
    let currentImg = 0
    if(currentImg === 0) {
        // img1.style.background.url = `../images/img.jpg`
        // img2.style.background.url = `../images/img.png`
        // img2.style.filter = `none`
    }
    console.log("Change img")
}


const fillEl = document.querySelector('.fill')
const circleEl = document.querySelector('.dragger')
const value = document.querySelector('.value')
const sliderEl = document.querySelector('.slider')
let x = 0;

function mouseDown(e) {
    document.addEventListener('mousemove', mouseMove)
    x = e.clientX
}


function mouseMove(e) {
    max = sliderEl.clientWidth
    if ((fillEl.clientWidth + (e.clientX - x)) <= max) {
        fillEl.style.width = fillEl.clientWidth + (e.clientX - x) + "px";
        value.innerText = Math.max(Math.ceil(Math.min(fillEl.clientWidth + (e.clientX - x), max) / max * 100), 0)
        x = e.clientX
    }


}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)

}


circleEl.addEventListener('mousedown', mouseDown)
document.addEventListener('mouseup', mouseUp)
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`


const changeColor = function (event) {
    if (event.keyCode === 38 && red < 255) {
        red += 5;
        green += 5;
        blue += 5;
    } else if (event.keyCode === 40 && red > 0) {
        red -= 5;
        green -= 5;
        blue -= 5;
    }
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

document.body.addEventListener('keydown', changeColor)
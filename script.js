const calc = document.querySelector("button")
const inp = document.querySelector("input")

let char = 0
let countword = 0;

inp.addEventListener('keypress', (e) => {

    if (e.key == ' ') {
        countword++;
    }
    else {
        char++;
    }
})

calc.addEventListener('click', () => {
    console.log('Char ', char);
    console.log('word ', countword);
})
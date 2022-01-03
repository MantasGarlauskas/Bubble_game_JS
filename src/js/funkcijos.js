//random fukcija
export function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//go funkcija, paleidzia kamuoliukus
export function go(i) { //galima taip rasyti const go = () =
    let intViewportHeight = window.innerHeight - 100;
    let intViewportWidth = window.innerWidth - 100;
    const circle = document.querySelectorAll('.circle');
    circle[i].style.left = rand(0, intViewportWidth) + 'px';
    circle[i].style.top = rand(0, intViewportHeight) + 'px';
};

export const makeBall = (text = '') => {
    let div = document.createElement('div');
    let divText = document.createTextNode(text)
    div.classList.add('circle');
    document.body.appendChild(div);
    div.appendChild(divText);
    if (text == 8) {
        div.style.fontSize = '40px';
        div.style.fontWeight = 'bold';
    };
}
let id, sec;

export const countTimer = mode => {
    const timerEl = document.querySelector('.timmer');
    switch (mode) {
        case 'reset':
            timerEl.innerText = '0';
            sec = 0;
            clearInterval(id)
        case 'start':
            id = setInterval(() => {
                sec++
                timerEl.innerText = sec;
            }, 1000)
    }

}
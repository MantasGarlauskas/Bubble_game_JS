import { rand, go, makeBall, countTimer } from './funkcijos';
import { leftCircle, rezCircle, rezDiv, reset, section, start } from './elements';

let left, rez2, rez;

for (let i = 0; i < rand(20, 100); i++) {
    makeBall(i + 1);
}
countTimer('reset');

const circle = document.querySelectorAll('.circle');

//intervalas kuris keicia judejimo trajektorijos laika

start.addEventListener('click', () => {
    console.log('labas')
    setInterval(() => {
        for (let i = 0; i < circle.length; i++) {
            setTimeout(() => {
                go(i);
            }, rand(0, 2000));
        }
    }, 2000);
    setInterval(() => {
        for (let i = 0; i < circle.length; i++) {
            go(i);
            //spalvoti kamuoliukai
            circle[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    }, 2000);
})


left = 0;
leftCircle.innerText = circle.length;

rez2 = 0;
rezCircle.innerText = rez2;

//paspaudimu ant apskritimo nustatymai - paspausdi dingsta, pridedamas skaicius
//su forEach ciklu
circle.forEach((apskritimas) => {
    apskritimas.addEventListener('click', (e) => {
        apskritimas.style.display = 'none';
        e.stopImmediatePropagation();
        rezCircle.innerText = ++rez2;
        leftCircle.innerText = circle.length - rez2;
    })
})

//su for ciklu
// for (let i = 0; i < circle.length; i++) {
//     circle[i].addEventListener('click', (e) => {
//         circle[i].style.display = 'none';
//         e.stopImmediatePropagation();
//         rezCircle.innerText = ++rez2;
//         leftCircle.innerText = circle.length - rez2;
//     })
// }

//pasauidmu skaiciacvimas ant body dalies (nepataikyti)
rez = 0;
rezDiv.innerText = rez; //nunulina div esancia informacija

document.querySelector('body').addEventListener('click', () => rezDiv.innerText = ++rez);

//RESET  MYGTUKAS
reset.addEventListener('click', (e) => {
    e.stopImmediatePropagation(); //sustabdo spaudimo skaiciiavima ant reset mygtuko
    rez = 0;
    rezDiv.innerText = rez;
    rez2 = 0;
    rezCircle.innerText = rez2;
    //su forEach ciklas
    leftCircle.innerText = circle.length;
    circle.forEach((resetCircle) => {
            resetCircle.style.display = null;
        })
        //su for ciklas
        // for (let i = 0; i < circle.length; i++) {
        //     circle[i].style.display = null;
        // }
        //grazina apskritima po paspausdimo reset mygtuko
    countTimer('reset');
});

//uzdedam ant SECTION kad nereaguotu  i paspaudimus
section.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
})


//(shuffle) funkcija, kad maisytu kamuoliukus
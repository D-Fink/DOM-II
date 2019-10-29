// Your code goes here

const bodySel = document.querySelector('body');
const divSel = document.querySelectorAll('div');
const busImage = document.querySelector('header image');
const topImage = document.querySelector('.img-content img');
const midImage = document.querySelector('.img-fluid');
const botImage = document.querySelector('.content-destination img');
const destinationH2 = document.querySelector('.content-destination h2');
const destinationP = document.querySelector('.content-destination p');
const navSel = document.querySelector('header');
const aSel = document.querySelector('.nav-link');
const footSel = document.querySelector('footer');
const btnSel1 = document.querySelector('.btn');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');
const clownH2 = document.querySelector('.text-content h2');
const clownP = document.querySelector('.text-content p')
const kissH2 = document.querySelector('.text-content:last-child h2');
const kissP = document.querySelector('.text-content:last-child p');
const audio = document.createElement('audio');
audio.setAttribute('src', '../sound/creepy_ambiance.ogg')

window.addEventListener('load', () => {
    // audio.play();
})

window.addEventListener('wheel', () => {
    navSel.style.visibility = 'hidden';
    busImage.style.visibility = 'hidden';
    topImage.style.visibility = 'hidden';
    midImage.style.visibility = 'hidden';
    bodySel.style.background = 'black';
    navSel.style.background = 'black';
    footSel.style.background = 'black';
    botImage.src = 'img/doctor.jpg';
})

btnSel1.addEventListener('mouseover', () => {
    btnSel1.textContent = 'HELP ME!';
    btnSel1.style.background = 'red';
})

btnSel1.addEventListener('click', () => {
    destinationH2.textContent = 'Your time has come';
    destinationP.textContent = '666 Please help the good doctor onto the bus 666';
    destinationH2.style.color = 'red';
    destinationP.style.color = 'red';
})

window.addEventListener('keyup', () => {
    busImage.src = 'img/scary_bus.jpg';
    busImage.style.visibility = 'visible';
    introH2.textContent = 'ALL ABOARD';
    introH2.style.color = 'red';
})

introH2.addEventListener('dblclick', () => {
    introP.textContent = 'Looks like we got some runners'
    topImage.src = 'img/clown_man.jpg';
    midImage.src = 'img/kiss_me.jpg';
    topImage.style.visibility = 'visible';
    midImage.style.visibility = 'visible';
    clownH2.textContent = 'Youll have to drag me kicking and screaming!';
    kissH2.textContent = 'Im claustrophobic!';
    clownH2.style.color = 'red';
    kissH2.style.color = 'red';
    introP.style.color = 'red';
})

topImage.addEventListener('dragstart', () => {
    clownH2.textContent = 'NO I DONT WANT TO DIE!';
})

topImage.addEventListener('dragend', () => {
    topImage.style.visibility = 'hidden';
})


 window.addEventListener('resize', () => {
    kissH2.textContent = 'Yikes! Id rather be on the bus!';
    midImage.style.visibility = 'hidden';
 })

 aSel.addEventListener('click', (event) => {
     event.preventDefault();
 })
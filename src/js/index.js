import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const buttonAdd = document.querySelector('.hydrapp__button--add');
const buttonRemove = document.querySelector('.hydrapp__button--remove');
const counter = document.querySelector('.hydrapp__counter');


const key = new Date().toISOString().slice(0, 10)
const checkKey = localStorage.getItem(key);


if(checkKey == null)
{
    
    localStorage.setItem(key,0);
}

let counterNumber = localStorage.getItem(key);
counter.innerHTML = `${counterNumber}`;


counter.innerHTML = `${counterNumber}`;

buttonAdd.addEventListener('click', addGlass);
buttonRemove.addEventListener('click', removeGlass);

function addGlass()
{
    if(counterNumber < 10)
    {
        counterNumber++;
        counter.innerHTML = `${counterNumber}`;
        localStorage.setItem(key,counterNumber);
        
    }
    else console.log("Can't add more than 10 glasses");
    
    
}

function removeGlass()
{
    if(counterNumber > 0)
    {
    counterNumber--;
    counter.innerHTML = `${counterNumber}`;
    
    
    }
    else console.log("Can't remove from 0 glasses");
    
}
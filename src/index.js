import '../node_modules/@fortawesome/fontawesome-free/js/all';
import * as dropdown from './dropdown';

const opener = document.querySelector('#opener');
const form = document.querySelector('#formy');


const formTog = () =>{
    form.classList.toggle('closed')
}
opener.addEventListener('click', formTog)
import {getRandomColor} from './utils';

export default function initApp() {
    const mainButton = document.createElement('button');
     mainButton.className = 'button';
     mainButton.textContent = 'Изменить цвет страницы';
     document.body.append(mainButton);
    mainButton.addEventListener('click', setBgColorHandler);
}

function setBgColorHandler() {
    const color = getRandomColor();
    console.log(color);
    document.body.style.backgroundColor = color;
}

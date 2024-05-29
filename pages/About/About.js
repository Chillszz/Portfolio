console.log('About.js is running');

const mainLeft = document.querySelector('#mainLeft');
const mainRight = document.querySelector('#mainRight');
const main = document.querySelector('#main');
const instruction = document.querySelector('.instruction');
instruction.setAttribute('transfered','false')

mainLeft.addEventListener('click',() => {
    if(!mainLeft.transferred) {
        instruction.setAttribute('transfered',true)
        console.log('click!')
        mainLeft.style.animation = 'slideLeft 1.3s ease-in-out forwards';
        main.innerHTML += '<div style="position: relative;display:flex;height:100%;width:100%;backgound-color:white;"><div>';
        setTimeout(() => {
            document.querySelector('#mainLeft > div').setAttribute('style','position:absolute;text-align:center;')
            document.querySelector('#mainLeft > div').innerText = "Let me show you what I can do";
        },900)
    }
})
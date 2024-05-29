console.log('About.js is running');

const mainLeft = document.querySelector('#mainLeft');
const mainRight = document.querySelector('#mainRight');
const main = document.querySelector('#main');
const instruction = document.querySelector('.instruction');
let showTimeBtn;

instruction.setAttribute('transfered',false);

mainLeft.addEventListener('click',() => {
    if(!mainLeft.transferred) {
        instruction.setAttribute('transfered',true)
        
        console.log('click!')
        mainLeft.style.animation = 'slideLeft 1.5s ease-in-out forwards';
        main.innerHTML += `<div id="showTime">
                                <div id="clickMe">
                                    Click me!
                                </div>
                           <div>`;
        setTimeout(() => {
            document.querySelector('#mainLeft > div').setAttribute('style','position:absolute;text-align:center;')
            document.querySelector('#mainLeft > div').innerText = "Let me show you what I can do";
            showTimeBtn = document.querySelector('#clickMe');
            showTimeBtn.setAttribute('transfered',false);
            showTime();
        },900)
    }
})

function showTime() {
    showTimeBtn.addEventListener('click', () => {
        if(!showTimeBtn.transferred) {
            showTimeBtn.setAttribute('transfered',true);
            showTimeBtn.style.animation = "enlargeAnim 1s ease-in-out forwards"
            setTimeout(() => {
                document.body.style.overflow = "hidden"
                document.body.style.backgroundColor = "rgba(139,0,0,1)"
    
            },500)
        }
    })
}

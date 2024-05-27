console.log('main.js is running!')

function start() {

    const scrollers = document.querySelectorAll('.scroller');

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute("data-animated", true)

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children)
        
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true)
                scrollerInner.appendChild(duplicatedItem)
            });
        });
    }

    //how old am i
    function calculateAge(birthDate) {
        var birthDateArray = birthDate.split('-');
        var birthYear = parseInt(birthDateArray[0]);
        var birthMonth = parseInt(birthDateArray[1]);
        var birthDay = parseInt(birthDateArray[2]);
    
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        var currentDay = currentDate.getDate();
    
        var age = currentYear - birthYear;
    
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }
    
        return age;
    }
    document.getElementById('yearsOld').innerText = calculateAge('2001-09-17')

    
}
start()
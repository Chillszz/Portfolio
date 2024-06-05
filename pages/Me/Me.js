console.log('Me.js is running!')

document.body.onload = () => {
    console.log('start animation')

    document.getElementById('link').addEventListener("animationstart", () => {
        const subtitles = [
            { text: "Hi!", delay: 1000, duration: 1000 },
            { text: "My name is Jazper Ruedas!", delay: 500 },
            { text: "I'm 20 years old.", delay: 500 },
            { text: "I was born in the Philippines on September 17th, 2001.", delay: 500 },
            { text: "I lived there for 15 years before moving to the USA.", delay: 500 },
            { text: "Once I moved here, I discovered my passion for programming and coding.", delay: 500 },
            { text: "Initially, I developed 2D games and eventually transitioned to 3D games.", delay: 500 },
            { text: "Along the way, I won multiple certificates in both school and outside competitions.", delay: 500 },
            { text: "It didn't take long to delve into web development.", delay: 500 },
            { text: "Graduating high school equipped me with a basic knowledge of JavaScript, Java, Python, HTML, and CSS.", delay: 500 },
            { text: "Eventually, I mustered the courage to learn on my own, thoroughly enjoying every aspect of coding.", delay: 500 },
            { text: "Within a year, I secured a position at Amazon, where I honed my skills further.", delay: 500 },
            { text: "Over time, I developed software and tools utilizing the coding languages I'd mastered.", delay: 500 },
            { text: "After three years as a coder, I advanced to a Data Analyst role, seeking to broaden my skill set.", delay: 500 }
            
        ]; 
        displaySubtitles(subtitles);
    });
}

function displaySubtitles(subtitles) {
    let index = 0;
    
    function showSubtitle() {
        if (index < subtitles.length) {
            const { text, delay, duration } = subtitles[index];
            const subtitleElement = document.getElementById('subtitle');
            if (subtitleElement) {
                subtitleElement.remove();
            }

            document.getElementById('main').insertAdjacentHTML('beforeend', `<div id="subtitle">${text}</div>`);
            
            const displayDuration = duration || text.length * 100; // Use custom duration or default to length-based duration
            setTimeout(() => {
                document.getElementById('subtitle').style.opacity = 0;
            }, displayDuration);
            
            setTimeout(() => {
                const subtitleElement = document.getElementById('subtitle');
                if (subtitleElement) {
                    subtitleElement.remove();
                }
                index++;
                showSubtitle();
            }, displayDuration + 1000 + delay); // Extra 1 second for the fade-out effect plus delay
        }
    }
    
    showSubtitle();
}

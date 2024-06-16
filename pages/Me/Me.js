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

    document.getElementById('link').addEventListener("animationend", () => {
        document.querySelector('#bp').style.left = "0vw";
        document.querySelector('.wave').style.transform = 'scale(2)';
        setTimeout(() => {
            document.querySelectorAll('.imgs').forEach(img => {
                if(img.getAttribute('started') == 'false') {
                    img.setAttribute('started','true')
                }
            })
            setTimeout(() => {
                document.querySelectorAll('.imgs').forEach(img => {
                    if(img.getAnimations()[0].animationName == 'rightside') {
                        img.style.animation = 'rightsideback 1s forwards ease-in-out'
                    } else {
                        img.style.animation = 'leftsideback 1s forwards ease-in-out'
                    }
                })
                setTimeout(() => {
                    document.querySelector('#phimg').style.filter = "none"
                    setTimeout(() => {
                        document.querySelector('#phimg').style.transform = 'translateY(100vh)'
                        document.querySelector('#usa').style.transform = 'translateY(100vh)'
                        setTimeout(() => {
                            document.querySelector('#bp').style.left = '100vw'
                            document.querySelector('#current').style.left = '100vw'
                            document.querySelector('.wave').style.transform = 'scale(1)'
                            setTimeout(() => {
                                careeranim()
                            },1000)
                        },4000)
                    },1000)
                },1000)
            },3000)
        },1000)
    })
}
function careeranim() {
    let boy = document.getElementById('boy'),
    jslogo = document.getElementById('js'),
    htmllogo = document.getElementById('html'),
    csslogo = document.getElementById('css'),
    pythonlogo = document.getElementById('python'),
    sqllogo = document.getElementById('sql'),
    cslogo = document.getElementById('cs')

    boy.style.opacity = '1'
    boy.style.height = '10vmax'
    setTimeout(() => {
        boy.style.transform = 'translateY(5vmax)'
        boy.style.height = '5vmax'
        setTimeout(() => {
            jslogo.style.transform = 'translateY(-30vh) translateX(-25vw)'
            jslogo.style.opacity = '1'
            setTimeout(() => {
                htmllogo.style.transform = 'translateY(-30vh) translateX(-15vw)'
                htmllogo.style.opacity = '1'
                setTimeout(() => {
                    csslogo.style.transform = 'translateY(-30vh) translateX(-5vw)'
                    csslogo.style.opacity = '1'
                    setTimeout(() => {
                        pythonlogo.style.transform = 'translateY(-30vh) translateX(5vw)'
                        pythonlogo.style.opacity = '1'
                        setTimeout(() => {
                            sqllogo.style.transform = 'translateY(-30vh) translateX(15vw)'
                            sqllogo.style.opacity = '1'
                            setTimeout(() => {
                                cslogo.style.transform = 'translateY(-30vh) translateX(25vw)'
                                cslogo.style.opacity = '1'
                                setTimeout(() => {
                                    document.querySelectorAll('.logo').forEach(item => {
                                        item.style.height = '6vmax'
                                        setTimeout(() => {
                                            item.style.animation = 'disappear 0.5s forwards ease-in-out'  
                                        },300)
                                    })
                                    boy.style.height = '11vmax'
                                    setTimeout(() => {
                                        boy.style.animation = 'disappear 0.5s forwards ease-in-out'  
                                    },300)
                                },1000)
                            },500)
                        },500)
                    },500)
                },500)
            },500)
        },1000)
    },1000)

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



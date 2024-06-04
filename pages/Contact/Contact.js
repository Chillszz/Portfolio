console.log('Contact.js is running')

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let first = document.getElementById('firstname').value,
    second = document.getElementById('lastname').value,
    email = document.getElementById('email').value,
    message = document.getElementById('message').value
    fetch('https://discord.com/api/webhooks/1247409368148742156/ZaiAuhLPGWXKk1kwIEQ6P4ngGjse2U9bMqDYIcbFzmyJ769emBIXhMJOm_SSObJR1I0I',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // the username to be displayed
                username: 'Portfolio Receiver',
                // the avatar to be displayed
                avatar_url: 'https://cdn-icons-png.freepik.com/512/4711/4711987.png',
                // contents of the message to be sent
                content: '<@370652009944186881>',
                allowed_mentions : { "parse": ["everyone"]  },
                embeds: [{
                    "fields": [
                        {
                            "name": "Full Name",
                            "value": `${second}, ${first}`,
                            "inline": true
                        },
                        {
                            "name": "Email",
                            "value": `${email}`,
                            "inline": true
                        },
                        {
                            "name": "Message",
                            "value": `${message}`
                        }
                    ]
                }]
            }),
        }).then(resp => resp.json())
        .then(resp => {
            alert('Sent! Please allow me to response within 24 hours')
        })
});
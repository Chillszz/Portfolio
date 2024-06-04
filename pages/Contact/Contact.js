console.log('Education.js is running')

document.getElementById('contact-form').addEventListener('submit', function (e) {
    fetch(
        'https://discord.com/api/webhooks/1247409368148742156/ZaiAuhLPGWXKk1kwIEQ6P4ngGjse2U9bMqDYIcbFzmyJ769emBIXhMJOm_SSObJR1I0I',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // the username to be displayed
                username: 'Portfolio Receiver',
                // the avatar to be displayed
                avatar_url:
                    'https://cdn-icons-png.freepik.com/512/4711/4711987.png',
                // contents of the message to be sent
                content:
                    '<@.chillsz>',
                "embeds": [{
                    "fields": [
                        {
                            "name": "Cat",
                            "value": "Hi! :wave:",
                            "inline": true
                        },
                        {
                            "name": "Dog",
                            "value": "hello!",
                            "inline": true
                        },
                        {
                            "name": "Cat",
                            "value": "wanna play? join to voice channel!"
                        },
                        {
                            "name": "Dog",
                            "value": "yay"
                        }
                    ]
                }]
            }),
        })
});
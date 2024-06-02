console.log('Education.js is running')

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value

    };

    fetch('https://script.google.com/macros/s/AKfycbwBbflPNjPIj6sGdl4rFoJsNE1-f1lQIVVK1IWChmgm5xMffjZMfZlU8bMQlNEGayxqOw/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form');
    });
});
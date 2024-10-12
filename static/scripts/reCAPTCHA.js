const form = document.forms['contact-form'];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute('6LeiBl8qAAAAADQ6V1DO4BfHiUmqTb-p2vDtqD9R', {action: 'submit'}).then(function(token) {
            // Add your logic to submit to your backend server here.
            submitFormData(createFormData(token));
            setTimeout(() => {
                const redirectURL = window.location.origin + '/contact-us/thank-you'
                window.location.href = redirectURL
            }, 750);
        });
    })
})

function createFormData(token) {
    const formData = new FormData(form)
    formData.append('token', token)

    return formData
}

async function submitFormData(formData) {
    const request = new Request('/contact-us/send-message', {
        method: 'POST',
        body: formData
    })

    const response = await fetch(request);
}
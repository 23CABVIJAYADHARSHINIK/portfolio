// Animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

function sendemail(){
    var templateParams = {
        email_id: document.getElementById("email").value,
        form_name: document.getElementById("name").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_4pd6sze', 'template_uegzosr', templateParams).then(function(response) {
        alert("Sent successfully!" +response.status);
    })
}
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.style.display = 'none';
  }, 1500);
});

// Typing Animation
const roles = [
  'Frontend Developer',
  'Web Designer',
  'Computer Application Student'
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = '';
let isDeleting = false;

const typingElement = document.getElementById('typing');

function typeEffect() {

  currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Navbar Shadow
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.custom-navbar');

  navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// Scroll Reveal
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
revealElements();

// Active Navbar Links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// EmailJS Contact Form
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const templateParams = {
    from_name: contactForm.querySelector('input[type="text"]').value,
    from_email: contactForm.querySelector('input[type="email"]').value,
    message: contactForm.querySelector('textarea').value,
  };


  emailjs.send('service_cht7fub', 'template_syj7cmj', templateParams)
    .then(() => {
      formMessage.innerHTML = '✅ Message sent successfully!';
      formMessage.style.color = 'green';
      contactForm.reset();
    })
    .catch((error) => {
      formMessage.innerHTML = '❌ Failed to send message!';
      formMessage.style.color = 'red';
      console.log(error);
    });
});

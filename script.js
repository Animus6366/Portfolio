const typeTextSpan = document.querySelector('.type-text');
const typedCursorSpan = document.querySelector('.typed-cursor');

const phrases = ["I'm a Cybersecurity Personnel", "I secure digital systems", "I protect against cyber threats"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseBeforeErase = 1500;
const pauseBeforeType = 500;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        typedCursorSpan.style.opacity = '1';
        typeTextSpan.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(() => {
            typedCursorSpan.style.opacity = '1';
            setTimeout(erase, pauseBeforeErase);
        }, typingSpeed);
    }
}

function erase() {
    if (charIndex > 0) {
        typedCursorSpan.style.opacity = '1';
        typeTextSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        typedCursorSpan.style.opacity = '0';
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }
        setTimeout(() => {
            type();
        }, pauseBeforeType);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeTextSpan && typedCursorSpan) {
        type();
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.parentElement.classList.add('active');
        }
    });
});

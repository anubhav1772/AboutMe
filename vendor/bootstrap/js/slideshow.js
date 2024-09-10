let slideIndex = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let slideNumber = document.getElementById('slide-number');
    
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'flex' : 'none';
    });
    
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index === slideIndex) {
            dot.className += ' active';
        }
    });
    
    slideNumber.textContent = `${slideIndex + 1}/${slides.length}`;
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function createDots() {
    let slides = document.querySelectorAll('.slide');
    let dotsContainer = document.querySelector('.dots-container');
    
    slides.forEach((_, index) => {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => currentSlide(index));
        dotsContainer.appendChild(dot);
    });
}

createDots();
showSlide(slideIndex); // Show the first slide initially

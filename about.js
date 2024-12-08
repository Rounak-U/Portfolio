document.addEventListener('DOMContentLoaded', () => {
    const sectionTitle = document.querySelector('.text-section h1.animated-title');
    const paragraphs = document.querySelectorAll('.text-section p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === sectionTitle) {
                    entry.target.classList.add('show');
                } else {
                    const delay = Array.from(paragraphs).indexOf(entry.target) * 0.30;
                    entry.target.style.setProperty('--delay', `${delay}s`);
                    entry.target.classList.add('show');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (sectionTitle) observer.observe(sectionTitle);
    paragraphs.forEach(paragraph => observer.observe(paragraph));
});

document.addEventListener('DOMContentLoaded', () => {
    const sectionTitle1 = document.querySelector('.frontend h1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (sectionTitle1) observer.observe(sectionTitle1);
});


document.addEventListener('DOMContentLoaded', () => {
    const sectionTitle1 = document.querySelector('.backend h1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (sectionTitle1) observer.observe(sectionTitle1);
});

document.addEventListener('DOMContentLoaded', () => {
    const sectionTitle1 = document.querySelector('.skillslang h2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (sectionTitle1) observer.observe(sectionTitle1);
});

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    const hamburger = document.querySelector('.hamburger');

    navContents.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Open Booking – Terminvereinbarung telefonisch
function openBooking() {
    window.location.href = 'tel:012141431';
}

// Open Google Maps
function openMaps() {
    window.open('https://www.google.com/maps/place/Dr.+Ewald+Walder/@48.2165356,16.3885665,133m/data=!3m2!1e3!5s0x476d0707c7bd5639:0x79bcd3b5ec264be8!4m14!1m7!3m6!1s0x476d0708ebb66ed9:0xc4426b51090e64!2sPraterstra%C3%9Fe+66%2F1+69b,+1020+Wien!3b1!8m2!3d48.2165919!4d16.3886769!3m5!1s0x476d0708ebbbd9bb:0xb4fae242d3d12915!8m2!3d48.2165919!4d16.3886769!16s%2Fg%2F1v2gck40?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
}

// Accordion Toggle
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.classList.remove('rotated');
    } else {
        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('open');
        });
        document.querySelectorAll('.accordion-icon').forEach(item => {
            item.classList.remove('rotated');
        });
        
        // Open clicked accordion
        content.classList.add('open');
        icon.classList.add('rotated');
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Navbar Scroll Animation
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Solid header background once scrolled
    if (currentScroll > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // If at the top of the page (in hero section), always show navbar
    if (currentScroll <= 100) {
        navbar.classList.remove('hidden');
    } 
    // If scrolling down and past the hero section, hide navbar
    else if (currentScroll > lastScrollTop && currentScroll > 100) {
        navbar.classList.add('hidden');
    } 
    // If scrolling up, show navbar
    else if (currentScroll < lastScrollTop) {
        navbar.classList.remove('hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Accessibility Mode Toggle
function toggleAccessibilityMode() {
    const body = document.body;
    const button = document.getElementById('accessibility-toggle');
    
    if (body.classList.contains('accessibility-mode')) {
        body.classList.remove('accessibility-mode');
        button.textContent = 'Barrierefreie Seite';
        button.setAttribute('aria-label', 'Barrierefreie Seite einschalten');
    } else {
        body.classList.add('accessibility-mode');
        button.textContent = 'Normale Ansicht';
        button.setAttribute('aria-label', 'Barrierefreie Seite ausschalten, zur normalen Ansicht wechseln');
        // Ensure no content stays hidden by scroll-reveal in accessibility mode
        body.classList.remove('reveal-ready');
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    }
}

// Scroll reveal animations
function setupScrollReveal() {
    // Skip animations in accessibility mode (content must stay visible)
    if (document.body.classList.contains('accessibility-mode')) return;

    const targets = document.querySelectorAll(
        '.section-header, .service-card, .contact-card, .fee-item, .accordion-item, ' +
        '.about-content, .about-image-wrapper, .advantage-item, .card, .hero-content, ' +
        '.process-step, .refund-note, .prose, .aside-card'
    );
    targets.forEach(el => el.classList.add('reveal'));

    document.body.classList.add('reveal-ready');

    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach(el => observer.observe(el));

    // Reveal hero immediately on load
    const hero = document.querySelector('.hero-content');
    if (hero) requestAnimationFrame(() => hero.classList.add('is-visible'));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setupScrollReveal();
    
    // Re-initialize Lucide icons after DOM is ready
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Setup accessibility toggle button
    const accessibilityButton = document.getElementById('accessibility-toggle');
    if (accessibilityButton) {
        accessibilityButton.addEventListener('click', toggleAccessibilityMode);
    }
});
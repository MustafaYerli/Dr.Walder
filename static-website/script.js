// Open Booking – Terminvereinbarung telefonisch
function openBooking() {
    window.location.href = 'tel:012141431';
}

// Scroll to online web calendar in the Termin section
function goToCalendar() {
    const target = document.getElementById('online-kalender');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        window.location.href = 'index.html#online-kalender';
    }
}

// Open Google Maps
function openMaps() {
    window.open('https://www.google.com/maps/place/Dr.+Ewald+Walder/@48.2165356,16.3885665,133m/data=!3m2!1e3!5s0x476d0707c7bd5639:0x79bcd3b5ec264be8!4m14!1m7!3m6!1s0x476d0708ebb66ed9:0xc4426b51090e64!2sPraterstra%C3%9Fe+66%2F1+69b,+1020+Wien!3b1!8m2!3d48.2165919!4d16.3886769!3m5!1s0x476d0708ebbbd9bb:0xb4fae242d3d12915!8m2!3d48.2165919!4d16.3886769!16s%2Fg%2F1v2gck40?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
}

// Accordion Toggle
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const triggers = document.querySelectorAll('.accordion-trigger');

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.classList.remove('rotated');
        if (triggers[index]) triggers[index].setAttribute('aria-expanded', 'false');
    } else {
        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('open');
        });
        document.querySelectorAll('.accordion-icon').forEach(item => {
            item.classList.remove('rotated');
        });
        triggers.forEach(t => t.setAttribute('aria-expanded', 'false'));

        // Open clicked accordion
        content.classList.add('open');
        icon.classList.add('rotated');
        if (triggers[index]) triggers[index].setAttribute('aria-expanded', 'true');
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
        '.process-step, .refund-note, .prose, .aside-card, .hospital-card, .alert-note'
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

// Vacation / closed popup — shown only between 27.07.2026 and 09.08.2026 (inclusive)
function setupVacationPopup() {
    const now = new Date();
    const start = new Date(2026, 6, 27, 0, 0, 0);   // 27.07.2026 00:00
    const end = new Date(2026, 7, 9, 23, 59, 59);    // 09.08.2026 23:59
    if (now < start || now > end) return;
    if (sessionStorage.getItem('urlaubPopupClosed') === 'true') return;

    const overlay = document.createElement('div');
    overlay.className = 'vacation-overlay';
    overlay.setAttribute('data-testid', 'vacation-popup');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'vacation-title');
    overlay.innerHTML = `
        <div class="vacation-card">
            <button type="button" class="vacation-close" data-testid="vacation-popup-close" aria-label="Schließen">
                <i data-lucide="x" aria-hidden="true"></i>
            </button>
            <div class="vacation-icon"><i data-lucide="palmtree" aria-hidden="true"></i></div>
            <h2 id="vacation-title" class="vacation-title">Liebe Patient:innen!</h2>
            <p class="vacation-text">Wir sind von <strong>27.07. &ndash; 9.08.</strong> auf Urlaub und daher geschlossen!</p>
            <p class="vacation-text">Danke für Ihr Verständnis!</p>
            <p class="vacation-sign">Ordination Dr. Ewald Walder</p>
        </div>
    `;
    document.body.appendChild(overlay);

    const close = () => {
        overlay.classList.remove('is-open');
        sessionStorage.setItem('urlaubPopupClosed', 'true');
        setTimeout(() => overlay.remove(), 300);
    };
    overlay.querySelector('.vacation-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });

    requestAnimationFrame(() => overlay.classList.add('is-open'));
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setupScrollReveal();
    setupVacationPopup();
    
    // Re-initialize Lucide icons after DOM is ready
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Setup accessibility toggle button
    const accessibilityButton = document.getElementById('accessibility-toggle');
    if (accessibilityButton) {
        accessibilityButton.addEventListener('click', toggleAccessibilityMode);
    }

    // If arriving via #online-kalender (e.g. from a subpage), scroll to the calendar
    if (window.location.hash === '#online-kalender') {
        setTimeout(goToCalendar, 300);
    }
});
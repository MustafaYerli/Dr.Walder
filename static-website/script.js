// Booking URL
const BOOKING_URL = 'https://testdrwalder.setmore.com/book?step=time-slot&products=dr-walder-smile&type=service&staff=dr-walder-smile&staffSelected=true';

// Open Booking
function openBooking() {
    window.open(BOOKING_URL, '_blank');
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    
    // Re-initialize Lucide icons after DOM is ready
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
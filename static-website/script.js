// Booking URL
const BOOKING_URL = 'https://testdrwalder.setmore.com/book?step=time-slot&products=dr-walder-smile&type=service&staff=dr-walder-smile&staffSelected=true';

// Open Booking
function openBooking() {
    window.open(BOOKING_URL, '_blank');
}

// Open Google Maps
function openMaps() {
    window.open('https://www.google.com/maps/search/?api=1&query=Praterstraße+66/1/69b,+1020+Wien', '_blank');
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
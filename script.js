document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Accordion / FAQ Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            
            // Toggle active state for current item
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }

            // Optional: Close other open accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherItem = otherHeader.parentElement;
                    const otherContent = otherHeader.nextElementSibling;
                    otherItem.classList.remove('active');
                    otherContent.style.maxHeight = "0px";
                }
            });
        });
    });

    // 2. "Book This Treatment" Action
    const bookBtn = document.getElementById('bookTreatmentBtn');
    bookBtn.addEventListener('click', () => {
        // Implement scheduling modal injection or redirect logic here
        alert('Redirecting to the booking system calendar...');
    });
});
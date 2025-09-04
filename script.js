document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible so it doesn't re-animate
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Attach the observer to each section
    sections.forEach(section => {
        observer.observe(section);
    });

});
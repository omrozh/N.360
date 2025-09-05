document.addEventListener('DOMContentLoaded', () => {

    const introButton = document.getElementById('intro-button');
    const pageContainer = document.querySelector('.page-container');

    // Prevent scrolling while intro is active
    document.body.classList.add('no-scroll');

    // Trigger animation on button click
    introButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Play the intro sound on user interaction
        
        // Remove the intro class to start the animation
        pageContainer.classList.remove('intro-overlay');

        // Allow scrolling after the animation finishes
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
        }, 1000); // Matches animation duration
    });


    // --- Cinematic Fade-In on Scroll for Episode Blocks (for after the intro) ---
    const blocks = document.querySelectorAll('.episode-block');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    blocks.forEach(block => {
        observer.observe(block);
    });

});
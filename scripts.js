document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.text');

    texts.forEach((text, index) => {
        if (text.classList.contains('show')) {
            text.style.display = 'block'; // Set to block
            text.style.opacity = 1; // Set opacity to 1 initially
        }
    });

    document.querySelector('.deodorant').onclick = function() {
        const text = document.querySelector('.hide1');
        if (text.classList.contains('show')) {
            text.style.opacity = 0; // Fade out effect
            setTimeout(() => {
                text.classList.remove('show'); // Remove show class after fading out
                text.style.display = 'none'; // Set display to none after fading out
            }, 1000); // Wait for the fade-out transition to finish
        } else {
            text.style.display = 'block'; // Ensure the display is block first
            setTimeout(() => {
                text.classList.add('show'); // Add show class to fade in
                text.style.opacity = 1; // Set opacity to 1
            }, 10); // Short delay to allow display change to take effect
        }
    }

    document.querySelector('.shampoo').onclick = function() {
        const text = document.querySelector('.hide2');
        if (text.classList.contains('show')) {
            text.style.opacity = 0; // Fade out effect
            setTimeout(() => {
                text.classList.remove('show'); // Remove show class after fading out
                text.style.display = 'none'; // Set display to none after fading out
            }, 1000); // Wait for the fade-out transition to finish
        } else {
            text.style.display = 'block'; // Ensure the display is block first
            setTimeout(() => {
                text.classList.add('show'); // Add show class to fade in
                text.style.opacity = 1; // Set opacity to 1
            }, 10); // Short delay to allow display change to take effect
        }
    }

    document.querySelector('.habits').onclick = function() {
        const text = document.querySelector('.hide3');
        if (text.classList.contains('show')) {
            text.style.opacity = 0; // Fade out effect
            setTimeout(() => {
                text.classList.remove('show'); // Remove show class after fading out
                text.style.display = 'none'; // Set display to none after fading out
            }, 1000); // Wait for the fade-out transition to finish
        } else {
            text.style.display = 'block'; // Ensure the display is block first
            setTimeout(() => {
                text.classList.add('show'); // Add show class to fade in
                text.style.opacity = 1; // Set opacity to 1
            }, 10); // Short delay to allow display change to take effect
        }
    }
});




(function() {
    const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
                navMenu.classList.toggle('active');
                });
                 // optional: close menu when clicking a link (better mobile UX)
                 const navLinks = navMenu.querySelectorAll('a');
                 navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        if (window.innerWidth <= 768) {
                            navMenu.classList.remove('active');
                        }
                    });
            });
        }
})();

document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.style.display = 'block';
    });
});

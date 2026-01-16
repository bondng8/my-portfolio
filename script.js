const navLinks = document.querySelectorAll('.nav-item');
const windowPathName = window.location.pathname;

navLinks.forEach(link => {
    if(link.href.includes(windowPathName)) {
        link.classList.add('active');
    }
})
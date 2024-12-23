
document.addEventListener("DOMContentLoaded", function() {

    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            event.preventDefault(); 
            const target = this.getAttribute('href'); 
            window.scrollTo({
                top: document.querySelector(target).offsetTop,
                behavior: 'smooth' 
            });
        });
    });

    
    const instagramLink = document.querySelector('.instagram');
    if (instagramLink) {
        instagramLink.addEventListener('click', function() {
            alert('Instagram profilime yönlendiriliyorsunuz!');
        });
    }

    
    const projelerimItems = document.querySelectorAll('#projelerim ul li');
    projelerimItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    const hobilerimItems = document.querySelectorAll('#hobilerim ul li');
    hobilerimItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});

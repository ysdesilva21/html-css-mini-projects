// mobile menu 

document.addEventListener('DOMContentLoaded',function(){
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    if(menuToggle){
        navLinks.forEach(link => {
            link.addEventListener('click',function(){
                menuToggle.checked = false;
            });
        });

        const navbar = document.querySelector('.navbar')
        document.addEventListener('click',function(event){
            if(!navbar.contains(event.target)){
                menuToggle.checked = false;
            }
        })
    }
});

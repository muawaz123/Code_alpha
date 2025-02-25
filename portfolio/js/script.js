	 
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    document.getElementById("viewCV").addEventListener("click", function() {
        window.open("muawaz.pdf", "_blank");
    })
    document.getElementById("sendMessage").addEventListener("click", function() {
        let name = document.getElementById("name").value;
        let whatsapp = document.getElementById("whatsapp").value;
        let message = document.getElementById("message").value;

        if (!name || !whatsapp || !message) {
            alert("Please fill all fields!");
            return;
        }
        let whatsappURL = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Name: " + name + "\nMessage: " + message)}`;
        window.open(whatsappURL, "_blank");
    });
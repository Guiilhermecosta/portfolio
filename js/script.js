function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/main-menu.png"
    }else{
        document.querySelector('.icon').src = "img/close02.png"
        menuMobile.classList.add('open');
    }
}
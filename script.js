var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        nav.classList.add('bg-custom-primary', 'shadow');
        nav.classList.add('navbar-dark', 'shadow');
        nav.classList.remove('bg-transparent', 'shadow');
        nav.classList.remove('navbar-white', 'shadow');
    } else {
        nav.classList.remove('bg-custom-primary', 'shadow');
        nav.classList.remove('navbar-dark', 'shadow');
        nav.classList.add('bg-transparent');
        nav.classList.add('navbar-white');
    }
})

$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});

const btnscrolltoTop = document.querySelector('#btnscrolltoTop');

window.addEventListener('scroll', scrollFunction);

function scrollFunction(){

    if(window.pageYOffset > 300){

        if(!btnscrolltoTop.classList.contains('btnFade-in')){
            btnscrolltoTop.classList.remove('btnFade-out');
            btnscrolltoTop.classList.add('btnFade-in');
            btnscrolltoTop.style.display = 'block';
        }
    } else {

        if(btnscrolltoTop.classList.contains('btnFade-in')){
            btnscrolltoTop.classList.remove('btnFade-in');
            btnscrolltoTop.classList.add('btnFade-out');

            setTimeout(function(){
                btnscrolltoTop.style.display = 'none';
            }, 250);
        }
    }
}

btnscrolltoTop.addEventListener('click', backtoTop);

function backtoTop() {
    window.scrollTo(0, 0);
}
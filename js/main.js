document.addEventListener('DOMContentLoaded', function () {
    let btnPrev = document.querySelector('.slick-prev');
    btnPrev.innerHTML = '<';

    let btnNext = document.querySelector('.slick-next');
    btnNext.innerHTML = '>';

});

function addImage() {
    let images = document.querySelectorAll('.add-images');
    for (let i = 0; i < images.length; i++ ) {
        images[i].style.display = 'flex';
    }

    let button = document.querySelectorAll('.btn');
    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'none';
    }
}
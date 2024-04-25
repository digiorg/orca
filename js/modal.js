let images = document.querySelectorAll('.images');
let background = document.querySelector(".background_black");
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

images.forEach(function (element, index) {
    element.onclick = function () {

        modal.style.display = 'flex'
        background.style.display = 'flex';
        let images = modal.querySelector('img')
        images.src = element.querySelector('.divImag').src
        element.style.cursor = 'default'
        images.style.overflow = 'scroll'
        images.style.overflow = 'scrolll'
        
    }
});

close.onclick = function () {
    modal.style.display = 'none';
    background.style.display = 'none';
}

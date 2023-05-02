let position = 0;
const SliderOur = document.querySelector('.slider-card');
const ActivImg = document.querySelectorAll('.slider-card-img');

document.querySelector('.right').addEventListener('click', function () {
    position = position + 409;
    if (position > 818) {
        position = 0;
    }
    SliderOur.style.left = -position + 'px';


});
document.querySelector('.left').addEventListener('click', function () {
    position = position - 409;
    if (position < 0) {
        position = 818;
    }

    SliderOur.style.left = -position + 'px';
});

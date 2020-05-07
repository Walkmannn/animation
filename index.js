
let button = document.querySelector('.btn');
let blueSquare = document.querySelector('.box');

function myAnimation() {
    let startPosition = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (startPosition == 300) {
            clearInterval(id);
        } else {
            startPosition++;
            blueSquare.style.top = startPosition + 'px';
            blueSquare.style.left = startPosition + 'px';
        }
    }
}

button.addEventListener('click', myAnimation);
const button = document.querySelector('.btn');

function moveElement(element, position) {
    element.style.top = position + 'px';
    element.style.left = position + 'px';
}

function animate() {
    let position = 0;
    const blueSquare = document.querySelector('.box');
    const id = setInterval(() => {
        // никогда не используй ==, всегда ===
        if (position === 300) {
            clearInterval(id);
        } else {
            moveElement(blueSquare, position++);
        }
    }, 10);
}

button.addEventListener('click', animate);

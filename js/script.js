const shape = document.getElementById('shape');
const colorPicker = document.getElementById('colorPicker');

function changeColor() {
    const color = colorPicker.value;
    shape.style.backgroundColor = color;
}

function moveShape(direction) {
    const currentPosition = parseFloat(shape.style.marginLeft) || 0;
    const step = 10;

    if (direction === 'left') {
        shape.style.marginLeft = `${currentPosition - step}px`;
    } else if (direction === 'right') {
        shape.style.marginLeft = `${currentPosition + step}px`;
    }
}

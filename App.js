const previewer = document.querySelector('.previewer');
const slider = document.querySelector('#border-radius-slider');

function handleSliderChange() {
    console.log(this.value);
    previewer.style.borderRadius = `${this.value}%`;
}

slider.addEventListener('input', handleSliderChange);

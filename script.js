const cord = document.querySelector('.toggle-scene__cord');

const bulb = document.querySelector('.bulb');

cord.addEventListener('click', () => {

    bulb.classList.toggle('on');

});
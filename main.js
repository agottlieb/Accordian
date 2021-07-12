const arrow = document.querySelector('.arrow');

const activeState = document.querySelector('.active-state');

const toggle = () => {
    activeState.classList.toggle('visible');
    console.log(1);
};

arrow.addEventListener('click', toggle);


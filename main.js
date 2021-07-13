//works!!
const arrow = document.querySelector('.arrow');

const activeState = document.querySelector('.active-state');

const question = document.querySelector('q1');

const toggle = () => {
    activeState.classList.toggle('visible');
    question.classList.toggle('visible');
};

arrow.addEventListener('click', toggle);

//arr2
const arr2 = document.querySelector('.arr2');
const as2 = document.querySelector('.ans2');

const t2 = () => {
    as2.classList.toggle('visible');
};

arr2.addEventListener('click', t2);
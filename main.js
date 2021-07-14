const question = document.querySelectorAll('.question');


question.forEach((item) => {
    item.addEventListener('click', (event) => {
        let showAnswer = event.target.parentNode;

        //don't select the ones that weren't clicked
        document.querySelectorAll('.faq-pair--active').forEach((item) => {
            if (item !=showAnswer) {
                item.classList.remove('..faq-pair--active');
            }
        });
        showAnswer.classList.toggle('.faq-pair--active')
    })
});

//works!!
// const arrow = document.querySelector('.arrow');

// const activeState = document.querySelector('.active-state');

// const question = document.querySelector('q1');

// const toggle = () => {
//     activeState.classList.toggle('visible');
//     question.classList.toggle('visible');
// };

// arrow.addEventListener('click', toggle);



// //arr2
// const arr2 = document.querySelector('.arr2');
// const as2 = document.querySelector('.ans2');

// const t2 = () => {
//     as2.classList.toggle('visible');
// };

// arr2.addEventListener('click', t2);
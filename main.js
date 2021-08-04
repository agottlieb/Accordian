const question = document.querySelectorAll('.faq-pair');

question.forEach((item) => {
    item.addEventListener('click', (event) => {
        //selects the entire FAQ pair that is clicked
        let showAnswer = event.target.parentNode;

        //don't select the ones that weren't clicked
        document.querySelectorAll('.faq-pair--active').forEach((item) => {
            if (item != showAnswer) {
                item.classList.remove('.faq-pair--active');
            }
        });
        showAnswer.classList.toggle('.faq-pair--active');
    });
});


//works!!
// const arrow = document.querySelectorAll('.arrow');

// const activeState = document.querySelectorAll('.answer');

// const question = document.querySelectorAll('.question');

// const toggle = () => {
//     activeState.classList.toggle('visible');
//     question.classList.toggle('visible');
// };

// arrow.addEventListener('click', toggle);


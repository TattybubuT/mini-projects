const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const orderCall = document.querySelector('.order-call');
const closeBtn = document.querySelector('span');

container.addEventListener('click', function () {
    wrapper.classList.add('active');
})
closeBtn.addEventListener('click', function () {
    wrapper.classList.remove('active');

})
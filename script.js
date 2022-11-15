const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

// після кліку створує клас active до  formBox
signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
})

signInBtn.addEventListener('click', function () {
    formBox.classList.remove ('active');
    body.classList.remove ('active');
})
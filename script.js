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
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "owu.linkpc.net",
    user: "alanvelex",
    database: "owu.linkpc.net",
    password: "root"
});
// тест
connection.connect(function(err){
    if (err) {
        return console.error("Помилка: " + err.message);
    }
    else{
        console.log("Підключення до серверу MySQL установлено");
    }
});
// закрити коннект
connection.end(function(err) {
    if (err) {
        return console.log("Помилка: " + err.message);
    }
    console.log("Підключення закрито");
});


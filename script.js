
let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.btn')
let clear = document.querySelector('.btn-clear')
let equal = document.querySelector('.btn-equal')

// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         let value = button.innerText;
//         screen.value += value;
//     });
// });

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
        console.log(screen.value)
    })
})

equal.addEventListener('click', function (e) {
    console.log(screen.value)
    screen.value = eval(screen.value)
})
clear.addEventListener('click', function () {
    screen.value = "";
})

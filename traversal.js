//event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click',function() {
//     card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

// cara 1
// for (let i = 0 ;i < close.length ; i++) {
//     close[i].addEventListener('click',function() {
        // close[i].parentElement.style.display = 'none';
    // });
// }

// cara 2
// for (let i = 0 ;i < close.length ; i++) {
//     close[i].addEventListener('click',function(event) {
//         event.target.parentElement.style.display = 'none';
//     });
// }

// cara 3 ==>paling evektif
close.forEach(function(elemen) {
    elemen.addEventListener('click',function(event) {
        event.target.parentElement.style.display = 'none';
    });
});

// DOM Traversal Method

const nama = document.querySelector('.nama');

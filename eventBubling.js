//event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click',function() {
//     card.style.display = 'none';
// });

// DOM Traversal
// //const close = document.querySelectorAll('.close');

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

// prevent default atau mencegah aksi default dari a href
// close.forEach(function(elemen) {
//     elemen.addEventListener('click',function(event) {
//         event.target.parentElement.style.display = 'none';
//         // ini prevent default / penghentian sikap 
//         event.preventDefault();
//         // untuk menghentikan kotak elemen yang ikut terseleksi ketika satu elemen x di clik
//         event.stopPropagation();
//     });
// });




// eventBubling
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click',function(e){
//         alert('ok')
//     });
// });



// DOM Traversal Method

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);





const container = document.querySelector('.container');

container.addEventListener('click',function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault()
    }
});
// getElementById
const judul=document.getElementById('judul');
judul.style.color='green';
judul.style.backgroundColor = 'orange';
judul.innerHTML = 'Nadhif Fajrul Minan';
// judul.style.fontSize ='30px';




// document.getElementsByTagName
const p = document.getElementsByTagName ('p');
for (let i=0; i < p.length ; i++) {
    p[i].style.backgroundColor = 'lightgreen';
}
const h1 = document.getElementsByTagName ('h1')[0];
h1.style.fontSize = '10px';

// document.getElementsByClassName
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';
// p1[0].innerHTML = 'ini diubah dari javascript';

// =========Slection 2 javascript=========\\

// document.querySelector ()--> satu element dan memilki kelemahan tidak bisa lebih ari satu element
const p4 = document.querySelector('#b p');
p4.style.color = 'red';
p4.style.fontSize = '30px';


const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'blue';

//querySelectorAll
/*const p = document.querySelectorAll('p');
for (let i=0 ;i < p.length; i++){
    p[i].style.backgroundColor = 'red';
}*/
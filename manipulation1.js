//Manipulation inner HTML\\
const judul = document.getElementById('judul');
judul.innerHTML = '<em>nadhif Fajrul Minan<em>';

const sectionA = document.querySelector('section#a');
const sectionB = document.getElementById('b');
// sectionA.innerHTML = 'Tergantikan satu blok';

// element.style
const judul1 = document.querySelector('#judul1');
judul1.style.color = 'blue';
judul1.style.backgroundColor = 'orange';

//Manipulation II ==> Menambahkan elemen baru setelah elemen tertentu(node)
//1. buat elemen baru
const pBaru = document.createElement('p');
//2. buat tulisan 
const teksBaru = document.createTextNode('paragraf baru');
//3. simpan tulisan didalam paragraf
pBaru.appendChild(teksBaru);
//4. simpan tulisan pbaru di akhir section A
const sectionA2 = document.getElementById('a');
sectionA2.appendChild(pBaru);


// Manipulation II ==>Menyimpan setelah item tertentu
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Tertentu yang saya tambahkan');
liBaru.appendChild(teksLiBaru);
// selection Parent
const ul = document.querySelector('section#b ul');
// membuat posisi
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru,li2);//(teksBaru,posisi)


// Manipulation II ==> remove element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Ujian 3 Nadhif





// Manipulation II ==> replace element(mengganti)

// const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru hasil Replace');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru,p4);


// Ujian Nadhif replace

// penanda
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

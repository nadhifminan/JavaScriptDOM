// Event Handler => inline html atribute & element method

const p3 = document.querySelector('.p3');

function ubahWarna() {
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;


// addEventListener

const p4 = document.querySelector('section#b p');
p4.addEventListener('click',function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});




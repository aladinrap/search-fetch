//JSON VARIABLES

            

//Variables
const addArt = document.getElementById('add-article')
const artArea = document.getElementById('article-area')
const searchArt = document.getElementById('search-article')
let nrArticle = 0

    //Event Listner input
    searchArt.addEventListener('keyup', function(){
        if(nrArticle === 0) {
            alert('Nu ai adaugat niciun articol!');
        }
        if(nrArticle === 1) {
            alert('Sistemul nu contine suficiente articole pentru a executa o filtrare!');
        }
        if(nrArticle > 1) {
            const titluri = document.querySelectorAll('.titluri');
            for( let i=0; i<titluri.length; i++)
            if(titluri[i].innerText.includes(`${searchArt.value}`)){
                titluri[i].parentElement.style.display = "block";
            } else
            titluri[i].parentElement.parentElement.style.display = "none";
        }
        
        searchArt.onkeyup = function() {
            var key = event.keyCode || event.charCode;
            if( key == 8 ){
                const titluri = document.querySelectorAll('.titluri');
                for( let i=0; i<titluri.length; i++)
                if(titluri[i].parentElement.parentElement.style.display = "none" && titluri[i].innerText.includes(`${searchArt.value}`))
                titluri[i].parentElement.parentElement.style.display = "block";
            }
        }    
        
    })

//Event Listner button
addArt.addEventListener('click', function(){
    getTitle();
    nrArticle++;
    let newart = document.createElement('div');
    newart.classList.add('newart');
    artArea.appendChild(newart)

    let li = document.createElement('li');
    newart.appendChild(li);

    let titlu = document.createElement('h1');
    titlu.classList.add('titluri');
    let brandu = document.createElement('h2');
    let descriere = document.createElement('p');
    let poza = document.createElement('img');

    
    async function getTitle() {
        let x = await fetch('https://dummyjson.com/products/');
        let y = await x.json();
        let rm = Math.floor(Math.random() * 29 + 1);
        poza.src = `${y.products[rm].thumbnail}`
        titlu.innerText = `Titlu:  ${y.products[rm].title}`;
        brandu.innerText = `Brand:  ${y.products[rm].brand}`;
        descriere.innerText = `Descriere:  ${y.products[rm].description}`;
        }
    li.appendChild(poza);
    li.appendChild(titlu);
    li.appendChild(brandu);
    li.appendChild(descriere);

})
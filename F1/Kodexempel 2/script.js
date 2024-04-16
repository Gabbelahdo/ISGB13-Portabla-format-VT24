"use strict";
window.addEventListener('load', ()=>{
window.fetch('https://restcountries.com/v3.1/name/sweden').then((res)=>{
return res.json();
}).then((data)=>{
    console.log(data);
    let countryData = data[0];


document.getElementById('preloader').classList.add('d-none');
let container = document.getElementById('content');

    let card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '20rem';

    container.appendChild(card);

    let cardImage = document.createElement('img');
    cardImage.className = 'card-img-top';
    cardImage.src=countryData.flags.png;
    card.appendChild(cardImage);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);
    let cardTitle = document.createElement('h5');
    cardTitle.className="card-title";
    cardTitle.textContent = countryData.name.official
    cardBody.appendChild(cardTitle);

let capital = document.createElement('p');
capital.className="card-text";
capital.innerHTML="<b>Huvudstad: " + countryData.capital[0] + '</b>';
cardBody.appendChild(capital);

let population = document.createElement('p');
population.className="card-text";
population.innerHTML="<b>Population:</b>" + countryData.population.toLocaleString();
cardBody.appendChild(population);

let foreignLangs = document.createElement('p');
foreignLangs.className="card-text";
foreignLangs.innerHTML="<b>Arabic: </b>" + countryData.translations.ara.official + "<br>" + "<b>Turkish: </b>" + countryData.translations.tur.common;

cardBody.appendChild(foreignLangs);


});

});
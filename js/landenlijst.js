// Als je klikt op een knop verdwijnen de vorige resultaten en zie je de resultaten van de aangeklikte subopdracht.
// Schrijf kleine functies die je opnieuw kan gebruiken.

// Subopdracht: landenlijst - 1 punt
// Maak een lijst van alle landen, gesorteerd op naam van het land.

//1 lijst van alle landen maken -> map
//2 alle dubbele landen erui -> new Set
//2 sorteren op naam vh land -> sort()
//3 lijst maken als je op button klikt
//4 functie maken om lijst te deleten

// const countries = randomPersonData.map(person => person.region);

// const unique = [...new Set(countries)];

// const result = unique.sort();

// const btnCountriesList = document.getElementById("btnLandenLijst");

// let showResults = () => {
//     btnCountriesList.addEventListener("click", addResultToList)
// };

// showResults();

//proberen anders
const getCountries = () => {
    const countries = randomPersonData.map(person => person.region);
    const unique = [...new Set(countries)];
    return result = unique.sort();
};

const btnCountriesList = document.getElementById("btnLandenLijst");

let showResults = () => {
    btnCountriesList.addEventListener("click", addResultToList)
};

getCountries();
showResults();

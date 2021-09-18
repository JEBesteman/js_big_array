// Subopdracht: steenbokvrouwen - 3 punten
// Maak een lijst van mensen:

// laat voor- en achternaam en hun foto zien
// sorteer de lijst op voornaam
// elke persoon op die lijst moet
// vrouw zijn
// ouder zijn dan 30 (1990 of ouder)
// een steenbok zijn (jarig van 22 december t/m 19 januari)

const persons = randomPersonData;

//om sort() goed werkend te krijgen;s callback pass into array.sort officially should return 1, 0 or -1. Chrome needs this helper, firefox not
const sort_helper = result => { return (result ? 1 : -1) };
   
const sortByName = (person1, person2) => sort_helper(person1.name > person2.name);

const getSteenbokvrouwen = () => {
    steenbokvrouwen = persons.filter(person => {
    const birthdate = person.birthday.dmy;
    const month = parseInt(birthdate.split("/")[1]);
    const day = parseInt(birthdate.split("/")[0]);
    if (month === 12 && day >= 22 || month === 1 && day <= 19)
        return person;
    })
    .filter(person => person.gender === "female") //vrouw
    .filter(person => person.age > 30) //ouder dan 30
    .sort(sortByName)
};

//laat voor- en achternaam en hun foto zien

const addSteenbokkenToList = () => {
        clearList();
        steenbokvrouwen.forEach(person => {
            const newLi = document.createElement("li");
            newLi.textContent = (`${person.name} ${person.surname}`);
            const img = document.createElement("img");
            img.setAttribute("src", `${person.photo}`);
            newLi.appendChild(img);
            resultList.appendChild(newLi);       
        });
    };


const btnSteenbokvrouwen = document.getElementById("btnSteenbokvrouwen");

const showResultsSteenbokvrouwen = () => {
    btnSteenbokvrouwen.addEventListener("click", addSteenbokkenToList)
};

getSteenbokvrouwen();
showResultsSteenbokvrouwen();







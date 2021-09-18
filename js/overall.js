const clearList = () => resultList.innerHTML = "";

const resultList = document.getElementById("resultList");

let addResultToList = () => {
    clearList();
    result.forEach(element => {
        const newLi = document.createElement("li");
        newLi.textContent = element;
        resultList.appendChild(newLi);
       
    });
};


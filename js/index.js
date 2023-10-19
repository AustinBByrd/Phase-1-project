let searchTerm = document.getElementById("form-search");
const searchButton = document.querySelector("form");
let searchResults = [];
let searchString
let searchTermLowerCase

const randomButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
let display = document.querySelector(".display");
const header = document.getElementById("header-background");





const removeChildren = () => {
    let firstChild = display.firstChild;
    while (firstChild) {
        display.removeChild(display.lastChild);
    }
}



//GET beer
const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            data.forEach(x => {
                findBeer(x);
            });
        });
    
};
    
//pull beer and grab tagline
const findBeer = (beer) => {
    // let searchTermLowerCase = searchTerm.value.toLowerCase();
    // let searchString = `${searchTermLowerCase.charAt(0).toUpperCase() + searchTermLowerCase.slice(1).toLowerCase()}`;

    const beerImg = document.createElement("img");
    const beerName = document.createElement("h4");
    const beerAbv = document.createElement("p");
    const beerTagLine = document.createElement("p");
    const beerContainer = document.createElement("div");
    const beerCard = document.createElement("div");
    beerCard.classList.add("card");
    beerContainer.classList.add("container");
    beerImg.classList.add("beerPhoto");


    beerImg.src = beer.image_url;
    beerImg.alt = `A picture of ${beer.name}`;
    beerAbv.innerText = "ABV: " + beer.abv + "%";
    beerTagLine.innerText = beer.tagline;
    beerName.innerText = beer.name;

    const beerTagLineLower = beer.tagline.toLowerCase();
    const searchTermLower = searchTerm.value.toLowerCase();

    let text = String(beerTagLineLower);
    
//search button works
    let test = text.indexOf(searchTermLower);
    if (test != -1) {
        beerContainer.appendChild(beerName);
        beerContainer.appendChild(beerAbv);
        beerContainer.appendChild(beerTagLine);
        beerContainer.appendChild(beerImg);
        beerCard.appendChild(beerContainer);
        display.appendChild(beerCard);
    } else {
        console.log("does not exist");
    }; 
};





searchButton.addEventListener("submit", (e) => {
    e.preventDefault();
    display.remove();
    display = document.createElement("div")
    display.classList.add("display");
    header.appendChild(display);  
    getBeer();  
    
 })






const getRandomBeer = () => {
fetch("https://api.punkapi.com/v2/beers/random")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(rand => {
            randomBeer(rand);
        });
    });
}

const randomBeer = (rand) => {
    const beerImg = document.createElement("img");
    const beerName = document.createElement("h4");
    const beerAbv = document.createElement("p");
    const beerTagLine = document.createElement("p");
    const beerContainer = document.createElement("div");
    const beerCard = document.createElement("div");
    beerCard.classList.add("card");
    beerContainer.classList.add("container");
    beerImg.classList.add("beerPhoto");


    beerImg.src = rand.image_url;
    beerImg.alt = `A picture of ${rand.name}`;
    beerAbv.innerText = "ABV: " + rand.abv + "%";
    beerTagLine.innerText = rand.tagline;
    beerName.innerText = rand.name;


    beerContainer.appendChild(beerName);
    beerContainer.appendChild(beerAbv);
    beerContainer.appendChild(beerTagLine);
    beerContainer.appendChild(beerImg);
    beerCard.appendChild(beerContainer);
    display.appendChild(beerCard);
}


randomButton.addEventListener("click", () => {
    display.remove();
    console.log(display);
    display = document.createElement("div")
    display.classList.add("display");
    header.appendChild(display); 
    getRandomBeer();
})






resetButton.addEventListener("click", () => {
    removeChildren();
})

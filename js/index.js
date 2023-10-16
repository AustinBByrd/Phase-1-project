let searchTerm = document.getElementById("form");
const searchButton = document.querySelector("button");
let searchResults = [];
const header = document.getElementById("header-background");


//GET beer
const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
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
    beerAbv.innerText = "ABV: " + beer.abv + "%";
    beerTagLine.innerText = beer.tagline;
    beerName.innerText = beer.name;

    let text = String(beerTagLine.innerText);
    
//    console.log(text);
//search button works
    searchButton.addEventListener("click", () => {
        let test = text.indexOf(searchTerm.value);
        if (test != -1) {
            console.log(beerName);
            console.log(beer.id);
            console.log(beerTagLine);
        } else {
            console.log("FALSE");
        };
    });

//Create new card

    beerContainer.appendChild(beerName);
    beerContainer.appendChild(beerAbv);
    beerContainer.appendChild(beerTagLine);
    beerContainer.appendChild(beerImg);
    beerCard.appendChild(beerContainer);
    header.appendChild(beerCard);
};

getBeer();

console.log(searchResults);    

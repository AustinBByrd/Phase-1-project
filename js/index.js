let searchTerm = document.getElementById("form");
const searchButton = document.querySelector("button");

//GET beer
const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
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
    const beerTagLine = document.createElement("p");
    const beerCard = document.createElement("div");
    beerImg.src = beer.image_url;

    beerTagLine.innerText = beer.tagline;

    let text = String(beerTagLine.innerText);
    
    console.log(text);
    
    //search button works - does not reset for new terms in search bar
    searchButton.addEventListener("click", () => {
        let test = text.indexOf(searchTerm.value);
        if (test != -1) {
            console.log("TRUE");
        } else {
            console.log("FALSE");
        };

    });
    
};

//search through the beer
/* const search = () => {
    const input = 
}; */




getBeer();
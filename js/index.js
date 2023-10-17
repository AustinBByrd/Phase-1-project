let searchTerm = document.getElementById("form");
const searchButton = document.querySelector("button");
let searchResults = [];
const header = document.getElementById("header-background");
const randomButton = document.getElementById("random");
let cardElement = document.getElementById("header-background");
const resetButton = document.getElementById("reset");
let display = document.querySelector(".display");

//remove contents
const removeChildren = () => {
    let firstChild = display.firstChild;
    while (firstChild) {
        display.removeChild(display.lastChild);
    }
}

<<<<<<< HEAD
=======



>>>>>>> origin/austin
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

    let text = String(beerTagLine.innerText);
    
<<<<<<< HEAD
    let test = text.indexOf(searchTerm.value);
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

=======
//    console.log(text);
//search button works
    //searchButton.addEventListener("click", () => {
        let test = text.indexOf(searchTerm.value);
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
    //});

//Create new card
    // beerContainer.appendChild(beerName);
    // beerContainer.appendChild(beerAbv);
    // beerContainer.appendChild(beerTagLine);
    // beerContainer.appendChild(beerImg);
    // beerCard.appendChild(beerContainer);
    // header.appendChild(beerCard);
};





searchButton.addEventListener("click", () => {
   display.remove();
   console.log(display);
   display = document.createElement("div")
   display.classList.add("display");
    header.appendChild(display);    
    getBeer();  
})




>>>>>>> origin/austin


//run random beer fetch
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


//searchbutton click event listen
searchButton.addEventListener("click", () => {
    removeChildren()
    setTimeout(getBeer, 1000);
    //getBeer();  
})

randomButton.addEventListener("click", () => {
    getRandomBeer();
})

resetButton.addEventListener("click", () => {
    removeChildren();
<<<<<<< HEAD
})
=======
})
>>>>>>> origin/austin

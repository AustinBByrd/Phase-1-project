let searchTerm = document.getElementById("form-search");
const searchButton = document.querySelector("form");
let searchResults = [];

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
    
//search button works
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





searchButton.addEventListener("submit", (e) => {
    e.preventDefault();
    display.remove();
    console.log(display);
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


document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("toggle");
    const audio = new Audio("audio/getbeer.mp3");
   
  
    checkbox.addEventListener("change", function() {
        var style = document.getElementById('style');
        if (checkbox.checked) {
            audio.play();
            audio.volume = 0.1;
            audio.loop = true;
      
            
            const volumeControl = document.createElement("input");
            volumeControl.setAttribute("type", "range");
            volumeControl.setAttribute("id", "volume-control"); 
            volumeControl.min = 0;
            volumeControl.max = 100;
            volumeControl.value = 10;
          
            const footer = document.querySelector("footer"); 
            footer.appendChild(volumeControl);
      
            
            const volume = document.querySelector("#volume-control");
            volume.addEventListener("change", function(e) {
                const adjustedVolume = e.currentTarget.value / 100; 
                audio.volume = Math.min(adjustedVolume, .4);
            })
            style.href = 'css/highenergy.css'; 
      } else {
        audio.pause();
        audio.currentTime = 0;
        const volumeControl = document.querySelector("#volume-control");
        if (volumeControl) {
          volumeControl.remove();
        }
        style.href = 'css/index.css';
      }
    });
  });
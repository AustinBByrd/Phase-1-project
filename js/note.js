const randomButton = document.getElementById("random");



fetch("https://api.punkapi.com/v2/beers/random")
    .then((resp) => resp.json())
    .then((data) => {
        //console.log(data);
        data.forEach(rand => {
            randomBeer(rand);
        });
    });



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

    randomButton.addEventListener("click", () => {
            beerContainer.appendChild(beerName);
            beerContainer.appendChild(beerAbv);
            beerContainer.appendChild(beerTagLine);
            beerContainer.appendChild(beerImg);
            beerCard.appendChild(beerContainer);
            header.appendChild(beerCard);
    })
}
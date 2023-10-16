const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then((resp) => resp.json())
        .then((beer) => {
            console.log(beer);
            findBeer(beer);
        });
    };
    
    
    const findBeer = (beer) => {
        const beerImg = document.createElement("img");
        const beerName = document.createElement("h4");
        const beerTagLine = document.createElement("p");
        const beerCard = document.createElement("div");
        beerImg.src = beer.image_url;
        beerTagLine.innerText = beer.tagline;
    
        console.log(beerTagLine);
    };


getBeer();
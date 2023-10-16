const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            data.forEach(beers =>{
                findBeer(beers);
            })
        });
    };
    
    
    const findBeer = (beers) => {
        const beerImg = document.createElement("img");
        const beerName = document.createElement("h4");
        const beerTagLine = document.createElement("p");
        const beerCard = document.createElement("div");
        beerImg.src = beers.image_url;
        beerTagLine.textContent = beers.tagline;
    
        console.log(beerTagLine);
    };


getBeer();
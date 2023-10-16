const getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers")
        .then((resp) => resp.json())
        .then((beer) => {
            console.log(beer);
        });
    };
    
    
/*    const findBeer = (beer) => {
        const beerImg = document.createAttribute("img");
        beerImg.src = beer.image_url;
    
        console.log(beerImg);
    };
*/
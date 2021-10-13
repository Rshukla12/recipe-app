import navbar from "../components/navbar.js";
import displaySearch from "../components/displayCard.js";
import loader from "../components/loader.js";

function fetchDishes(mealId){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    return fetch(url)
            .then( ( res ) => res.json() )
            .catch( ( err ) => console.log(err) );
}


let id = 53063;

async function handleLoad(){
    try {
        let res = [];
        loader("container", true);
        for ( let i = 1; i < 10; i++ ){
            const a = await fetchDishes(id);
            res.push(a.meals[0]);
            id--;
        }
        console.log(res);
        displaySearch(res, "container");
        loader("container", false);
    } catch ( err ){
        console.log(err);
    }
}


window.addEventListener( "load", () => {
    document.querySelector("nav").innerHTML = navbar( { title: "Latest Recipes", id:2 } );
    handleLoad()
})
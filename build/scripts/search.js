import navbar from "../components/navbar.js";
import displaySearch from "../components/displayCard.js";

function fetchDishes(q){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`;
    return fetch(url)
            .then( ( res ) => res.json() )
            .catch( ( err ) => console.log(err) );
}


async function handleSearch(){
    try {
        event.preventDefault();
        document.getElementById("search-cont").style.display = "none";
        const q = document.getElementById("dish-name").value;
        const {meals:res} = await fetchDishes(q);
        displaySearch(res, "container");
    } catch ( err ){
        console.log(err);
    };
        
}

function displaySuggestions(res){
    const frag = new DocumentFragment();
    const lim = res.length < 9 ? res.length : 9;
    for ( let i = 0; i < lim; i++ ){
        const div = document.createElement("div");
        div.textContent = res[i].strMeal;
        frag.append(div);
    }
    const cont = document.getElementById("search-cont");
    cont.innerHTML = null;
    cont.append(frag);
    cont.addEventListener( "click", inputHandle );
    cont.style.display = "block";
}


function inputHandle(){
    if ( event.target.parentNode.id !== "search-cont" ){
        return;
    }
    const query = document.getElementById("dish-name");
    query.value = event.target.innerHTML
}

async function handleSuggestions(){
    try {
        const q = document.getElementById("dish-name").value;
        if ( q.length <= 1){
            document.getElementById("search-cont").style.display = "none";
            return;
        }
        const {meals} = await fetchDishes(q);
        displaySuggestions(meals);
    } catch ( err ){
        console.log(err);
    }
}

function handleKeyPress(){
    // debouncer
    let id;
    return () => {
        id && clearTimeout(id);
        id = setTimeout( () => {
            handleSuggestions();
        }, 200);
    }
}



window.addEventListener( "load", () => {
    document.querySelector("nav").innerHTML = navbar( { title: "Search Recipes", id: 0 } );
    const inp = document.getElementById("dish-name");
    const btn = document.getElementById("search");
    inp.onkeydown = handleKeyPress();
    btn.addEventListener("click", handleSearch);
})
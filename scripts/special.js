import navbar from "../components/navbar.js";
import createDishCard from "../components/dishCard.js";


function fetchRandom(){
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then( ( res ) => res.json() )
}

function displayDetails(dish){
    const cont = document.getElementById("container");
    cont.innerHTML = null;

}

function addBtn(target, dish){
    const btn = document.createElement("button");
    btn.textContent = "Display Details";
    btn.addEventListener("click", displayDetails(dish));
    target.append(btn)
}


async function handleLoad(){
    try {
        const cont = document.getElementById("container");
        const {meals} = await fetchRandom();
        const res = createDishCard( meals[0] );
        addBtn(res, meals[0]);
        cont.append( res );
    } catch ( err ){
        console.log(err);
    }
}


window.addEventListener( "load", () => {
    document.querySelector("nav").innerHTML = navbar( { title: "Recipe of The Day", id:1 } );
    handleLoad();
})
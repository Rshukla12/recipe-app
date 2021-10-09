import navbar from "../components/navbar.js";
import createDishCard from "../components/dishCard.js";


function fetchRandom(){
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then( ( res ) => res.json() )
}

function addBtn(target, dish){
    const btn = document.createElement("button");
    btn.textContent = "Display Details";
    btn.addEventListener("click", ()=>{
        displayDetails(dish)
    });
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


function displayDetails(dish){
    const target = document.getElementById("container");
    const cont = document.createElement("div");
    const img = document.createElement("img");
    const info = document.createElement("div");
    const name = document.createElement("h1");
    const cate = document.createElement("h3");
    const cout = document.createElement("h3");
    const table = document.createElement("ul");
    const inst = document.createElement("p");

    target.className = "new-cont";

    name.textContent = dish.strMeal;
    img.src = dish.strMealThumb;
    cate.textContent = dish.strCategory;
    cout.textContent = dish.strArea;
    inst.textContent = dish.strInstructions;

    // create table
    for ( let i = 1; i <= 20; i++ ){
        const li = document.createElement("li");
        if ( dish[`strIngredient${i}`] == "" ){
            break;
        }
        li.textContent = dish[`strIngredient${i}`] + " - " + dish[`strMeasure${i}`]
        table.append(li)
    }
    info.append( name, cate, cout, inst, table );
    cont.append( img, info );
    target.innerHTML = null;
    target.append( cont );
}

window.addEventListener( "load", () => {
    document.querySelector("nav").innerHTML = navbar( { title: "Recipe of The Day", id:1 } );
    handleLoad();
})
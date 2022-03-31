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

function createRow(val){

}


function displayDetails(dish){
    const target = document.getElementById("container");
    const cont = document.createElement("div");
    const cont2 = document.createElement("div");
    const img = document.createElement("img");
    const info = document.createElement("div");
    const name = document.createElement("h1");
    const cate = document.createElement("h3");
    const cout = document.createElement("h3");
    const table = document.createElement("table");
    const inst = document.createElement("p");

    target.className = "new-cont";
    table.border = "1"

    name.textContent = dish.strMeal;
    img.src = dish.strMealThumb;
    cate.textContent = "Category - " + dish.strCategory;
    cout.textContent = "Region - " + dish.strArea;
    inst.innerText = dish.strInstructions;

    const t = document.createElement("tr");
    const th = document.createElement("th");
    const th1 = document.createElement("th");

    th.textContent = "Ingredient";
    th1.textContent = "Measure";

    t.append(th, th1);
    table.append(t);

    // create table
    for ( let i = 1; i <= 20; i++ ){
        const tr = document.createElement("tr");
        const li = document.createElement("li");
        if ( !dish[`strIngredient${i}`] ){
            break;
        }
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.textContent = dish[`strIngredient${i}`];
        td2.textContent = dish[`strMeasure${i}`];
        tr.append(td1, td2)
        table.append(tr);
    }
    cont2.append( img, cate, cout )
    info.append( name, inst, table );
    cont.append( cont2, info );
    target.innerHTML = null;
    target.append( cont );
}

window.addEventListener( "load", () => {
    document.querySelector("nav").innerHTML = navbar( { title: "Recipe of The Day", id:1 } );
    handleLoad();
})
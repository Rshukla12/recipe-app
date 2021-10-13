import createDishCard from "./dishCard.js";

function displaySearch(dishes, id){
    const container = document.getElementById(id);
    container.innerHTML = null;
    let frag = new DocumentFragment();
    for ( const dish of dishes ){
        const div = createDishCard(dish);
        frag.append(div);
    }
    container.append(frag);
}

export default displaySearch;
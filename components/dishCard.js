
function createDishCard(dish){
    const dishCont = document.createElement("div");
    const name = document.createElement("h1");
    const img = document.createElement("img");
    const btn = document.createElement("button");


    dishCont.className = "dish-card";
    name.textContent = dish.strMeal;
    img.src = dish.strMealThumb;
    btn.textContent = "Watch on Youtube";
    btn.onclick = () => location.href = dish.strYoutube;

    dishCont.append(img, name)
    if ( dish.strYoutube ){
        dishCont.append(btn);
    }
    return dishCont;
}

export default createDishCard;
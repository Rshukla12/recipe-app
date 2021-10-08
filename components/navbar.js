const navbar = ( {title="Title", id=0} ) => {
    let searchActive = "", recipeActive = "", latestActive = "";
    let searchLink = "'./search.html'", recipeLink = "'./todays_special.html'", latestLink = "'./latest.html'";
    switch ( id ){
        case ( 0 ):
            searchActive = "active";
            searchLink = "#";
            break;
        case ( 1 ):
            recipeActive = "active";
            recipeLink = "#";
            break;
        case ( 2 ):
            latestActive = "active";
            latestLink = "#";
            break;
    }
    return `<div id="navbar">
                <div class="left">
                    <div class="active-link">${title}</div>
                </div>
                <div class="right">
                    <div class="link ${searchActive}" onclick="javascript:location.href=${searchLink}">Search Recipes</div>
                    <div class="link ${recipeActive}" onclick="javascript:location.href=${recipeLink}">Recipe of the day</div>
                    <div class="link ${latestActive}" onclick="javascript:location.href=${latestLink}">Latest Recipes</div>
                </div>
            </div>`
}

export default navbar;
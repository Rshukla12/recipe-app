const navbar = ( {title="Title"} ) => {
    return `<div id="navbar">
                <div class="left">
                    <div class="active-link">${title}</div>
                </div>
                <div class="right">
                    <div class="link">Search Recipes</div>
                    <div class="link">Recipe of the day</div>
                    <div class="link">Latest Recipes</div>
                </div>
            </div>`
}

export default navbar;
import navbar from "../components/navbar.js";

window.addEventListener( "load", () => {
    document.querySelector("nav").innerHTML = navbar( { title: "Recipe of The Day" } );
})
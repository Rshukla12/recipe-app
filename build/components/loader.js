function loader(id, isLoading){
    const cont = document.getElementById(id);
    let div = document.getElementById('loader')
    if ( isLoading && div ){
        div.style.display = "none";
    } else if ( !isLoading && div ){
        div.style.display = "block";
    } else if ( isLoading ) {
        const div = document.createElement('div');
        div.id = "loader";
        cont.append(div);
    }
}

export default loader;
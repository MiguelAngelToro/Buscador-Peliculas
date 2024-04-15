const buscadorBtn = document.querySelector('#buscador');
buscadorBtn.addEventListener('input', getDataMovies);

function getDataMovies() {
    const palabra = buscadorBtn.value;
    const url = `http://www.omdbapi.com/?apikey=466d1bd4&s=${palabra}`;
    
    fetch(url)
    .then((respuesta)=>{
       return respuesta.json();
    })
    .then(moviesData =>{
        showMovies(moviesData.Search);
    });
    
}

function showMovies(movies) {
    const resultados = document.querySelector('#resultados');
    let html = "";

    movies.forEach(movie => {
        const {Title,Poster} = movie;
        html += `
        <div class ="cards">
            <img src = "${Poster}">
            <h1>${Title}</h1>
        </div>
        `
        
    });

    resultados.innerHTML = html;
    
}
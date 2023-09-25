const BASE_URL = 'https://api.tvmaze.com/search/shows?q=';
const form = document.querySelector('form');

function getMovies(movie){
    const URL  = BASE_URL+movie;
    console.log(URL);
    axios.get(URL)
    .then((res)=>{
        console.log(res);
        const movieList = res.data;  // ye array h movies ka
        for(let movie of movieList){
            let movieURL = movie.show.image.medium;
            if(movieURL!= null){
                console.log(movieURL);
                let img = document.createElement('img');
                img.setAttribute('src', movieURL);
                movieContainer.appendChild(img);
            }
        }
        console.log(res);
    })
}

function removeMovies(parent){
    while(parent.firstChild){  // jab tak parent ka first child h tab tk chlega loop
        parent.firstChild.remove(); // jo jo child aate rhe unko remove krte rho
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target.children[0].value);

    const movie  = e.target.children[0].value;
    removeMovies(movieContainer);
    getMovies(movie);
})
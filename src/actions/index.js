export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV="REMOVE_FAV";
export const SET_SHOW_FAV='SET_SHOW_FAV';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const ADD_TO_MOVIE_LIST='ADD_TO_MOVIE_LIST';
export const CLOSE='CLOSE';
// action creators
export function addMovies(movies){ // dispatch
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addFav(movie){
    return{
        type:ADD_FAV,
        movie:movie
    }
}

export function removeFac(movie){
    return {
        type:REMOVE_FAV,
        movie:movie
    }
}
export function setShowFav(showFavourites){
    return {
        type:SET_SHOW_FAV,
        showFavourites:showFavourites
    }
}


//  adding functionality of searching 

export function handleMovieSearch(movie){
    console.log(movie);
    const url=`https://www.omdbapi.com/?i=tt3896198&apikey=e2be18dc&t=${movie}`;
    console.log(url);
    return function(dispatch){
        fetch(url)
        .then(response  => response.json())
        .then(movie=>{
            console.log(movie); 
            dispatch(addMovieSearchResult(movie));
        })
    }
}
export function addMovieSearchResult(movie){    
    return {
        type:ADD_SEARCH_RESULT,
        movie:movie
    }
}

export function addToMovieList(movie){
    return {
        type:ADD_TO_MOVIE_LIST,
        movie:movie
    }
}

export function close(value){
    return {
        type:CLOSE,
        value:value
    }
}
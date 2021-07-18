import { combineReducers } from 'redux';

import { ADD_MOVIES, ADD_FAV, REMOVE_FAV, SET_SHOW_FAV, ADD_SEARCH_RESULT, ADD_TO_MOVIE_LIST, CLOSE } from './../actions';

const initialMovieState={
    list:[],
    fav: [],
    showFavourite: false
}
export function movies(state=initialMovieState,action){
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAV:
            return{
                ...state,
                fav:[action.movie,...state.fav] 
            }
        case REMOVE_FAV:
            const filterArray = state.fav.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                fav:filterArray
            }
        case SET_SHOW_FAV:
            return {
                ...state,
                showFavourites:action.showFavourites
            }
        case ADD_TO_MOVIE_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state;
    }
}

const intialSearchState={
    result:{},
    showSearchResult:false,
}

export function search(state=intialSearchState,action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie
            }
        case CLOSE:
            return{
                ...state,
                showSearchResult:action.value
            }
        default:
            return state;
    }
}

// creating the root reducer
const intialRootReducer = {
    movies:initialMovieState,
    search:intialSearchState
}
// export default function rootReducer(state=intialRootReducer,action){
//     return { // telling that movie managed by movies reducer and search by search reducer  
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    // property name : reducer name
    movies:movies,
    search:search
})
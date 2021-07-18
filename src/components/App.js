import { data } from '../data'
import React from 'react';
import Navbar  from './Navbar';
import MovieCard from './MovieCard'
import { addMovies, showFav, setShowFav } from  '../actions/index';
import { StoreContext } from '../index';

import { connect } from 'react-redux';


class App extends React.Component {
  componentDidMount(){
    // make API call here to get movies
    // after getting the movies call DISPATCH action
    this.props.store.subscribe(()=>{
      this.forceUpdate();
    })
    this.props.store.dispatch(addMovies(data));
  }
  isMovieFavourite= (movie)=>{
    const { movies } = this.props.store.getState();
    const index = movies.fav.indexOf(movie);
    // console.log(fav)
    if(index !== -1){
      return true;
    }
    return false;
  }
  showAllMovies=()=>{
    this.props.store.dispatch(setShowFav(false));
  }
  showAllFav=()=>{
    this.props.store.dispatch(setShowFav(true));
  }
  render(){
    const { movies,search } = this.props.store.getState();// { movies:{} , search:{}}
    const {list, showFavourites, fav  } = movies;
    const displayMovies = showFavourites ? fav : list;
    
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '':'active'}`} onClick={this.showAllMovies}>
              Movies
            </div>
            <div className={`tab ${showFavourites ? 'active':''}`} onClick={this.showAllFav}>
              Favorites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index)=>{
              return <MovieCard
                        movie={movie}
                        key={`movies-${index}`}
                        store={this.props.store}
                        isFavourite={this.isMovieFavourite(movie)}
                        />
            })}
          </div>
          {displayMovies.length == 0 ? <div className="no-record" > No Favourties </div>: ''}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {
//           (store)=> <App store={store}></App>
//         }
//       </StoreContext.Consumer>
//     )
//   }
// }

function callback(state){
  return {
    movie:state.movies,
    search:state.search
  }
 }
  
const connectedComponent = connect(callback)(App);

export default connectedComponent;

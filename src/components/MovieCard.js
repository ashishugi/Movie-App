import React from 'react';

import { addFav, removeFac } from '../actions/index'
class MovieCard extends React.Component{
    handleFavourite = ()=>{
        const { movie } = this.props;
        this.props.store.dispatch(addFav(movie));
    }
    handleUnFavourite=()=>{
        const { movie } = this.props;
        this.props.store.dispatch(removeFac(movie))
    }
    render(){
        const { movie,isFavourite } = this.props;
        return(
            <div className="movie-card">
                <div className="card-left">
                    <img  alt="movie"  src={movie.Poster}/>
                </div>
                <div className="card-right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button onClick={this.handleUnFavourite} className="unfavourite-btn">Unfavourite</button>
                            :  <button onClick={this.handleFavourite} className="favourite-btn">Favourite</button>
                        }
          
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
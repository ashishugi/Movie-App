import React from 'react';
import { handleMovieSearch,addToMovieList,close } from '../actions';
import { StoreContext } from '../index';
import { connect } from 'react-redux';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:''
        }
    }
    handleAddToMovie=(movie)=>{
        this.props.dispatch(addToMovieList(movie));
        this.props.dispatch(close(false));
    }
    handleSearch=()=>{
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        this.props.dispatch(close(true));
    }
    handleInputChange=(e)=>{
        this.setState({
            searchText:e.target.value
        });
    }
    handleCloseButton=()=>{
        this.props.dispatch(close(false));
    }
    render(){
        const { result,showSearchResult } = this.props.search;
        return (
            <div className="navbar">
                <div className="search-container">
                    <input type="text" onChange={this.handleInputChange}/>
                    <button className="search-btn" onClick={this.handleSearch}>Search</button>
                    {
                        showSearchResult && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="" />
                                <div className="movie-intro">
                                    {result.Title}
                                    <button className="add-btn" onClick={()=>this.handleAddToMovie(result)}>Add Movie</button>
                                    <button className="add-btn-2" onClick={this.handleCloseButton}>Close</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        )
    }
}

// class NavbarWrapper extends React.Component{
//     render(){
//         return (
//             <StoreContext.Consumer>
//                 {
//                     (store)=> <Navbar dispatch={store.dispatch} search={this.props.search}></Navbar>
//                 }
//             </StoreContext.Consumer>
//         )
//     }
// }
function callback(state){
    return {
      movie:state.movies,
      search:state.search
    }
   }
    
const connectedComponent = connect(callback)(Navbar);
export default connectedComponent;
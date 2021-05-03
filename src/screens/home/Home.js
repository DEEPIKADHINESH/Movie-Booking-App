import React,{Component} from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/moviesData";
import {GridListTile} from '@material-ui/core';
import {GridListTileBar} from '@material-ui/core';
import { GridList } from '@material-ui/core';
//import { render } from "@testing-library/react";

const classes = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height:'250px'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
   
  },
  title: {
    color: theme.palette.primary.light,
  },
});



class Home extends Component{
  constructor(){
    super();
    this.state={
      title:"" ,
        genres: [],
        artists: [],
        releaseDateStart: "",
        releaseDateEnd: "",
    };
 }
 movieNameChangeHandler=()=>{
    this.setState({title:this.state.title});
 }
movieGenersChangeHandler=()=>{
  this.setState({geners:this.state.geners});
}
movieArtistChangeHandler=()=>{
    this.setState({Artist:this.state.artists});
}
startReleaseDateHandler=()=>{
  this.setState({releaseDate:this.state.releaseDateStart});
}
endReleaseDateHandler=()=>{
  this.setState({endDate:this.state.releaseDateEnd});
}

  render(){
    const { classes } = this.props;
    console.log("Ayush" + this.state.movieName);
    var filterMovie=moviesData.filter((movie)=>{
    return(movie.title=== this.state.title ||this.state.artists.includes((movie.artists[0].first_name+" "+movie.artists[0].last_name)))
  })
    //if(this.state.movieName.length ===0  && this.state.artists.length === 0){
      //filterMovie=moviesData;
    
   
    return(
      <div>
      <div><Header /></div>,
     <div className={classes.root}>
            <GridList className={classes.gridList} cols={5}>
              {moviesData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.poster_url} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
           <div className="flex-container">
             <div className="left">
             <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
              {filterMovie.map((movie) => (
                <GridListTile className="released-movie-grid-item"
                  key={"grid" + movie.id}
                >
                  <img
                    src={movie.poster_url}
                    className="movie-poster2"
                    alt={movie.title}
                  />
                  <GridListTileBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>

            </div></div>
           </div>
        );
      }
     }

export default Home;
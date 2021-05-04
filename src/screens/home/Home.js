import React, { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/moviesData";
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import ReactDOM from "react-dom";
import "./Home.css";
import { withStyles } from '@material-ui/core/styles';
//import { Theme, createStyles, } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import genres from "../../common/genre";
import artists from "../../common/artists";
import Details from '../details/Details.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  upcomingMoviesHeading: {
    textAlign: 'center',
    background: '#ff9999',
    padding: '8px',
    fontSize: '1rem'
  },
 
  gridListMain: {
    transform: 'translateZ(0)',
    cursor: 'pointer',
    margin: '0%'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
    maxWidth: 240
  },
  title: {
    color: theme.palette.primary.light,
  }
});
class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      genres: [],
      artists: [],
      releaseDateStart: "",
      releaseDateEnd: "",
    };
  }
  movieNameChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  }
  movieGenersChangeHandler = (event) => {
    this.setState({ geners: event.target.value });
  }
  movieArtistChangeHandler = (event) => {
    this.setState({ Artist: event.target.value });
  }
  startReleaseDateHandler = (event) => {
    this.setState({ releaseDate: event.target.value });
  }
  endReleaseDateHandler = (event) => {
    this.setState({ endDate: event.target.value });
  }
  movieClickHandler = (movieId) => {
    this.props.history.push('/movie/' + movieId);
    ReactDOM.render(<Details movieId={movieId} />, document.getElementById('root'));
  }
  render() {
    const { classes } = this.props;
    console.log("Ayush" + this.state.movieName);
    var filterMovie = moviesData.filter((movie) => {
      return (movie.title === this.state.title || this.state.artists.includes((movie.artists[0].first_name + " " + movie.artists[0].last_name)))
    })
    if (this.state.movieName.length === 0 && this.state.artists.length === 0) {
      filterMovie = moviesData;


      return (
        <div>
          <div><Header /></div>,
          <div className={classes.root}>
            <GridList className={classes.gridListUpcomingMovies} cols={5}>
              {moviesData.map((tile) => (
                <GridListTile key={tile.img} className="a">
                  <img src={tile.poster_url} alt={tile.title} className="movie-poster" />
                  <GridListTileBar
                    title={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
         
            <div className="right">
              <Card>
                <CardContent>
                  <FormControl className={classes.formControl}>
                    <Typography className={classes.title} color="textSecondary">
                      FIND MOVIES BY:
                                    </Typography>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                    <Input id="movieName" onChange={this.movieNameChangeHandler} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                    <Select
                      multiple
                      input={<Input id="select-multiple-checkbox-genre" />}
                      renderValue={selected => selected.join(',')}
                      value={this.state.genres}
                      onChange={this.genreSelectHandler}
                    >
                      <MenuItem value="0">None</MenuItem>
                      {genres.map(genre => (
                        <MenuItem key={genre.id} value={genre.name}>
                          <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                          <ListItemText primary={genre.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                    <Select
                      multiple
                      input={<Input id="select-multiple-checkbox" />}
                      renderValue={selected => selected.join(',')}
                      value={this.state.artists}
                      onChange={this.artistSelectHandler}
                    >
                      <MenuItem value="0">None</MenuItem>
                      {artists.map(artist => (
                        <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                          <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                          <ListItemText primary={artist.first_name + " " + artist.last_name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="releaseDateStart"
                      label="Release Date Start"
                      type="date"
                      defaultValue=""
                      InputLabelProps={{ shrink: true }}

                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="releaseDateEnd"
                      label="Release Date End"
                      type="date"
                      defaultValue=""
                      InputLabelProps={{ shrink: true }}

                    />
                  </FormControl>
                  <br /><br />
                  <FormControl className={classes.formControl}>
                    <Button variant="contained" color="primary"> APPLY
 </Button>
                  </FormControl>
                </CardContent>
              </Card>
            </div>
          </div>
       
      );
    }
  }
}
export default withStyles(styles)(Home);


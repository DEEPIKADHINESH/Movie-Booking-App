import React, { Component } from 'react';
import Home from './home/Home';
import Details from './details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';
import moviesData from '../assets/moviesData';

class Controller extends Component {

  
  render() {
    return (
      <Router>
        <div className="main-container">
        <Route exact path='/' render={(props) => <Home {...props} baseURL={this.baseURL} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseURL={this.baseURL}  />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props}  baseURL={this.baseURL} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseURL={this.baseURL}/>} />
    
        </div>
      </Router>
    )
  }
}

export default Controller;
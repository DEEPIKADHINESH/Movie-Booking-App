import React,{Component} from "react";
import "./Header.css";
import logo from './logo.svg';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
 class Header extends Component{
 render(){
return(
  
    <div>
         <div className="header"><img src={logo} id="logo" alt={logo}></img>,
         <div className="login-button">
          <Button
            variant="contained"
            color="default"
            onClick={this.openModalHandler}
          >
            Login
          </Button>
        </div>
        {this.props.showBookShowButton ?
        <div className="booknow-button">
            <Link to={"/bookshow/" + this.props.id}>
              <Button variant="contained" color="primary">
                Book Show
              </Button>
            </Link>
            </div>
          : ""}
          </div></div>
)
 }
}
  
       
            
       
     
 
export default Header;
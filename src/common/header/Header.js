import React,{Component} from "react";
import "./Header.css";
import logo from './logo.svg';
 class Header extends Component{
     render(){
     return(
         
         <div className="header"><img src={logo} id="logo" alt={logo}></img></div>
         
     )
 }
}
export default Header;
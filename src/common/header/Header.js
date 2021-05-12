import React,{Component} from "react";
import "./Header.css";
import logo from './logo.svg';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
 class Header extends Component{
 render(){
return(
  
    <div>
         <div className="header"><img src={logo} id="logo" alt={logo}></img>,
          </div></div>
)
 }
}
  
       
            
       
     
 
export default Header;
import React from 'react'
import {
  Link
 
} from "react-router-dom"
import "./InfoBar.css"

const InfoBar = ({picture, gitHub, linkedIn}) => {
    return (
        <div>
            
            <ul id="side-form" className="sidenav side-form backColor">
    

    <div className="caption center-align"><img className="circle" src={picture}/></div>
     <li><a className="subheader">Daniela Carmona </a></li>
     
     <Link to="/projects" >  <li><a  className="waves-effect sidenav-close">
       <i className="material-icons ">code</i>Proyectos</a>
     </li></Link>

     <Link to="/about" >  <li><a  className="waves-effect sidenav-close">
       <i className="material-icons">accessibility</i>Acerca de mi</a>
     </li></Link>
   <Link to="/">  <li><a  className="waves-effect sidenav-close">
       <i className="material-icons">home</i>Inicio</a>
     </li></Link>
    
     <li><div className="divider"></div></li>
     <div>
     <li><a  className="waves-effect">
       Contacto</a>
     </li>
     <li><a href="mailto:danleon022688@gmail.com" className="waves-effect">
       <i className="material-icons">mail_outline</i></a>
     </li>
     
       <li><a href="http://github.com/danleonca/" target="_blank" className="waves-effect"> <img width="25px"className="waves-effect" src={gitHub}/></a></li>
       <li><a href="http://linkedin.com/in/daniela-carmona-leon/" target="_blank" className="tooltipped  push--left" data-position="bottom" data-tooltip="Hands on code"><img width="25px" src={linkedIn}/></a></li>
     </div>
    
   </ul>

        </div>
    )
}

export default InfoBar

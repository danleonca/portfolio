import React from 'react'
import "./NavBar.css"

const NavBar = ({style}) => {


    return (
        <div>


<nav className="z-depth-0 clorNav" >
    <div className="nav-wrapper" className={style} >
    <span className="grey-text text-darken-4 menuIcon" >
     <i className="medium material-icons sidenav-trigger waves-effect" data-target="side-form">menu</i>
   </span>
    
    </div>
  </nav>







        </div>
    )
}

export default NavBar

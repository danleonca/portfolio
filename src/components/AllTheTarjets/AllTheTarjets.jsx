import React from 'react'
import Tarjet from '../Tarjet/Tarjet'
import NavBar from '../NavBar/NavBar'

const AllTheTarjets = ({playa}) => {
   


    return (
        <div >


<div className="parallax-container">
<img className="bg-image responsive-img slider fullscreen" src={playa}/>
<NavBar/>
        <div className="parallax firstDiv">
        
          <div className="secondDiv">
            <span>Hello </span>
            <span className="title">World!</span>
          </div>
        </div>







      </div>




<h3 className="red-text text-lighten-1">Proyectos con Java Script</h3>
<div className="row">
        <div className="col l1"></div>
      <div className="col l4 m12"><Tarjet/></div>
      <div className="col l2"></div>
      <div className="col l4 m12"><Tarjet/></div>
     
      <div className="col l4 m12"><Tarjet/></div>
      <div className="col l2"></div>
      <div className="col l4 m12"><Tarjet/></div>
      
    </div>



        </div>
    )
}

export default AllTheTarjets

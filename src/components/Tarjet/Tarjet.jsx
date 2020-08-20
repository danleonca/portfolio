import React from 'react'
import bqInicio from "../../images/bqInicio.png"

const Tarjet = () => {
    return (
        <div>
            
            <div className="card medium">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator col l13" src={bqInicio}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">Ver la app</a></p>
      <p><a href="#">Ir al código</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

 
 



        </div>
    )
}

export default Tarjet

import React from 'react'

export const SideBar = () => {
  
    
    return (
        <div>
             <div id="side-menu" className="sidenav side-menu">

             <form className="add-recipe container section">
      <h6 >Envíame un mensaje </h6>
      <div className="divider"></div>
      <div className="input-field">
        <input  id="title" type="text" className="validate"/>
        <label htmlFor="title">Escribre tu nombre </label>
        
      </div>
      <div className="input-field">
        <input  id="title" type="text" className="validate"/>
        <label htmlFor="title">Escribre tu email </label>
        
      </div>
      <div className="input-field">
        <input placeholder="Mensaje" id="title" type="text" className="validate"/>
        
        
      </div>
     
      <div className="input-field center">
        <button className="btn-small">Enviar</button>
      </div>
    </form>

  </div>
        </div>
    )
}

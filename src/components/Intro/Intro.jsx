import React from 'react'
import "./Intro.css"
import NavBar from '../NavBar/NavBar'


const Intro = () => {
    return (
      
        <container className= "curve">
              <NavBar/>
            <div className="text">
            <div className="name">Dan CL</div>
            <div className="role">...Front end-Developer  </div>
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#FF3B6C" fill-opacity="1" d="M0,288L0,256L288,256L288,128L576,128L576,288L864,288L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path></svg>
            </div>
        </container>
    )
}

export default Intro

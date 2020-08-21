import React from "react";
import "./MainPage.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const MainPage = ({ bosque }) => {
  return (
    <div className="back">
      <img className="bg-image responsive-img slider fullscreen" src={bosque} />
      <div className="bg-pattern">
        <div className="slider fullscreen allText">
          <div className="caption center-align design">
            <h1 className="dot">.</h1>
            <h2 className="body-content light grey-text text-lighten-3">
              Daniela Carmona
            </h2>
            <h3 className="colorDesing">
              A Passionate scientist!!! <span>o_O</span>
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Front end-developer
            </h5>

            <Link
              to="/projects"
              className="waves-effect waves-light btn btn-large opac-btn portFolio"
            >
              {" "}
              PortFolio{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

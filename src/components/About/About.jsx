import React from "react";
import "./About.css";
import NavBar from "../NavBar/NavBar";

const About = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const M = window.M;
    // nav menu

    // add recipe form
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
  });

  return (
    <div>
      <NavBar style="clorNav" />
      <div className="parallax-container ">
        <div className="parallax firstDiv">
          <div className="secondDiv">
            <span>Hello </span>
            <span className="title">World!</span>
          </div>
        </div>
      </div>

      <div className="all-body-click-region secondPart">
        <div className="container">
          <div>
            <div className="content">
              <div className="about_me">
                <h1>Hola,</h1>
                <p>Me gustaria contarte un poco sobre mí, </p>
                <p>
                  {" "}
                  Yo soy Daniela, soy una persona súper objetiva, proactiva y
                  valiente; la ciencia es y siempre será mi mayor pasión.
                </p>
                <p>
                  Poseo un background científico ya que de profesión soy
                  Bióloga, creo que siempre he sido extremadamente curiosa y
                  aprender cosas nuevas es algo que me motiva día a día.{" "}
                </p>
                <p>
                  Soy Front end developer egresada del bootcamp de Laboratoria
                  donde desarrollé habilidades técnicas para el desarrollo web
                  con herramientas como: JavaScript, css, html, bootstrap,
                  materialize, react, node.js, fireBase, mongodb, etc.{" "}
                </p>
                <p>
                  Me encanta solucionar problemas a través de la ciencia y
                  tecnología; como front end developer he descubierto que la
                  capacidad de analisis de un problema te puede llevar a
                  resolverlo de múltiples formas, y woowww créanme que eso es
                  algo realmente extraordinario.{" "}
                </p>

                <p>
                  Puedes contactarme en mis redes sociales o dejando un mensaje
                  aquí{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

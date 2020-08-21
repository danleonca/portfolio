import React from "react";
import pokemon from "../../images/pokemon.svg";
import mdLinks from "../../images/mdLinks.svg";
import socialNet from "../../images/socialNet.svg";
import burgerQ from "../../images/burgerQ.svg";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <section id="blog" class="section section-blog scrollspy container">
        <span className="grey-text text-darken-4">
          <i
            className=" material-icons sidenav-trigger waves-effect"
            data-target="side-form"
          >
            menu
          </i>
        </span>
        <h6 class="center">Hacking time</h6>
        <h3 className="center">
          {" "}
          <span class="grey-text text-darken-4">
            <i class="material-icons grey-text text-darken-4">code</i>Proyectos
            <i class="material-icons grey-text text-darken-4">code</i>
          </span>
        </h3>
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={pokemon} />
              </div>
              <div class="card-content">
                <span class="card-title activator ">
                  Data Lover{" "}
                  <i class="material-icons  red-text text-accen-3">favorite</i>{" "}
                  <i class="material-icons right grey-text text-darken-4">
                    more_vert
                  </i>
                </span>
                <p>
                  <a
                    href="https://github.com/danleonca/CDMX009-Data-Lovers"
                    target="_blanc"
                  >
                    Ver el código
                  </a>
                </p>
                <p>
                  <a
                    href="https://shari12.github.io/CDMX009-Data-Lovers/"
                    target="_blanc"
                  >
                    Ir a la App
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  <i class="material-icons">favorite</i>Data Lover
                  <i class="material-icons">favorite</i>
                  <i class="material-icons right">close</i>
                </span>
                <p>
                  Data Lover de pókemon GO es una app creada para apoyar a los
                  maestros pokemones en su busqueda por ser más fuertes, esta
                  app consume el set de datos de todos los pokemones de la
                  región Kanto y crea una interfaz web donde se puede visualizar
                  y manipular data, para que el usuario pueda acceder a ella de
                  forma eficiente.
                </p>
                <p>
                  Se utilizó JavaScript, HTML y CSS, es una aplicación que se
                  puede visualizar en todos los dispositivos.
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={socialNet} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  estuDía
                  <i class="material-icons lime-text text-accen-1">edit</i>
                  <i class="material-icons cyan-text text-darken-3">
                    import_contacts
                  </i>
                  <i class="material-icons right">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://github.com/danleonca/CDMX009-Social-Network"
                    target="_blanc"
                  >
                    Ver el código
                  </a>
                </p>
                <p>
                  <a
                    href="https://danleonca.github.io/CDMX009-Social-Network/"
                    target="_blanc"
                  >
                    Ir a la App
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  estuDía<i class="material-icons">edit</i>
                  <i class="material-icons">import_contacts</i>
                  <i class="material-icons right">close</i>
                </span>
                <p>
                  estuDÍA es una red social de apoyo para las personas
                  interesadas en llevar a cabo el proceso de admisión al IPN, es
                  un espacio donde los usuarios a través de publicaciones puedan
                  compartir consejos, experiencias, etc; y así hacer el proceso
                  de ingreso a la Universidad más fácil y sólido entre los
                  solicitantes.
                </p>
                <p>
                  {" "}
                  Es una aplicación SPA, movil first, creada con JavaScript,
                  HTML y CSS. Permite la persistencia de datos a través de
                  FireBase
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={mdLinks} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  dan-mdlinks
                  <i class="material-icons deep-purple-text text-lighten-3">
                    code
                  </i>
                  <i class="material-icons right">more_vert</i>
                </span>
                <p>Markdown Links</p>
                <p>
                  <a
                    href="https://github.com/danleonca/CDMX009-MdLinks"
                    target="_blanc"
                  >
                    Ver el código
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  dan-mdlinks<i class="material-icons">code</i>
                  <i class="material-icons right">close</i>
                </span>
                <p>
                  "dan-mdlinks" es una libreria creada con Javascript y Node Js
                  para facilitar la extracción y verificación de los links que
                  se encuentran en un archivo markdow (.md).
                </p>
                <p>
                  El ejecutable de la aplicación es a través de la Interfaz de
                  línea de comando{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={burgerQ} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Burger Queen
                  <i class="material-icons green-text text-lighten-1">
                    restaurant
                  </i>
                  <i class="material-icons right">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://github.com/danleonca/CDMX009-BurgerQueen"
                    target="_blanc"
                  >
                    Ver el código
                  </a>
                </p>
                <p>
                  <a
                    href=" https://shari12.github.io/CDMX009-BurgerQueen/#/"
                    target="_blanc"
                  >
                    Ir a la App
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Burger Queen <i class="material-icons">restaurant</i>
                  <i class="material-icons right">close</i>
                </span>
                <p>Diseñada para ipad-pro</p>
                <p>
                  Es una PWA desarrollada para la administración del flujo de
                  clientes dentro de un restaurante de Hamburguesas. Este
                  restaurante requiere una aplicación donde sus empleados, tanto
                  cocineros como meseros puedan seguir paso a paso el ciclo de
                  vida que tienen cada una de sus tareas, de una forma fácil y
                  rápida. Lo cual les ayude con el control del restaurante, así
                  como aumentar su productividad y minimizar sus tiempos de
                  pedido-entrega. Este proyecto fue creado con JS, React,
                  bootstrap y Firebase como backend. Para poder crear un nuevo
                  usuario es necesario tener la contraseña del manager password=
                  gerente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

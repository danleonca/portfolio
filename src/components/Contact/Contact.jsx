import React from "react";
import { firebase } from "./fireBase";

const Contact = () => {
  const [names, setName] = React.useState("");
  const [mails, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const addMess = () => {
    firebase
      .firestore()
      .collection("allComents")
      .add({
        name: names,
        mail: mails,
        comments: message,
        date: new Date(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // console.log(coment.value);
        //const cleanBox = document.getElementById('text-box');
        setName("");
        setMail("");
        setMessage("");
        //console.log(cleanBox);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div id="contact" className="section section-contact scrollspy">
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  className="validate"
                  onChange={(e) => setName(e.target.value)}
                  value={names}
                />
                <label htmlFor="icon_prefix">Nombre</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  type="email"
                  className="validate"
                  onChange={(e) => setMail(e.target.value)}
                  value={mails}
                />
                <label htmlFor="icon_email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">message</i>
                <input
                  type="text"
                  className="validate"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
                <label htmlFor="icon_prefix">Mensage</label>
              </div>
            </div>
            <button
              className="grey waves-effect btn-large center-aling"
              onClick={addMess}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <footer className=" page-footer white ">
        <div className="footer-copyright">
          <div className="container grey-text">
            Daniela Carmona Leon /front end - developer/
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

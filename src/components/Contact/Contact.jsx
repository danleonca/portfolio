import React from 'react'
import { firebase } from "./fireBase";
//require("firebase/auth");




const Contact = () => {
  const [names, setName] = React.useState("");
  const [mails, setMail] = React.useState("");
  const[message, setMessage]=React.useState("");

  const addMess=()=>{

  firebase.firestore().collection('allComents').add({

    name: names,
    mail: mails,
    comments: message,
    date: new Date,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      // console.log(coment.value);
      //const cleanBox = document.getElementById('text-box');
      setName('');
      setMail('');
      setMessage ('');
      //console.log(cleanBox);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    })
  }



    return (
        
            <div id="contact" class="section section-contact scrollspy">
        <div class="container">
          <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" class="validate" onChange={(e)=>setName(e.target.value)} value={names}/>
                    <label for="icon_prefix">Nombre</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input type="email" class="validate" onChange={(e)=>setMail(e.target.value)} value={mails}/>
                    <label for="icon_email">Email</label>
                  </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                      <i class="material-icons prefix">message</i>
                      <input type="text" class="validate"onChange={(e)=>setMessage(e.target.value)} value={message}/>
                      <label for="icon_prefix">Mensage</label>
                    </div>
                  </div>
                  <button class="grey waves-effect btn-large center-aling" onClick={addMess} >Enviar</button>
              </form>
            </div>
          </div>

    <footer class=" page-footer white ">
  
    
      <div class="footer-copyright">
      
        <div class="container grey-text">
       Daniela Carmona Leon /front end - developer/ 
          
        </div>
      </div>
    </footer>
















        </div>
    )
}

export default Contact

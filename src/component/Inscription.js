import React from 'react';
import { useState } from 'react';


function Inscription() {
  const [name, setName] = useState('');

  const [dat, setDat] = useState('');
  const [vile, setVile] = useState('');
  const [genr, setGenr] = useState('');
  const [lois, setLois] = useState([]);
 

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  


  // const handleCheck = (event) => {
  //  var  updat = [...lois,event.target.value]
   
  //   const lop = lois.map(function(){return lop})
  //   if (event.target.checked==lop) {
  //    setLois(updat) ;
  //   }
  //  // else if (setLois(lois.filter(hobby => hobby !== event.target.value))){lois.join(', ')}
    
  //   //else{setLois(updat)}
  // };
 
      const list = ['sport','hoki','bisbol']

  const handleCheck = (event) =>{
     var updatedList = [...lois, event.target.value];
      const lop = list.map(function(){return lop})
      
    if(lop != event.target.checked){setLois(updatedList)}
    else{}setLois(updatedList)
    
  };

  
  
  const renderErrorMessage = (name) =>{
  name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
  );


 } 
  const database = [
    { username: "ahmed", password: "123" },
    { username: "ali", password: "baba" },
 
    ];
    const errors = { 
    uname: "Votre identifiant est incorrect.", 
    upass: "Votre mot de passe est incorrect."
    };
    

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, upass,dat,vile,genr,lois } = document.forms[0];
    setName(uname.value)
    setDat(dat.value)
    setVile(vile.value)
    setGenr(genr.value);
  setLois(lois.value);
  


    const userData = database.find((user) => user.username === 
    uname.value);
    if (userData) {
    if (userData.password !== upass.value) {
    setErrorMessages({ name: "upass", message: errors.upass });
    } else {
    setIsSubmitted(true);
    }
    } else {
    setErrorMessages({ name: "uname", message: errors.uname });
    }
    };
    const loisirs = ['Sport', 'Lecture', 'Music'];
  const renderForm = (
    <div className="login-form">
      <div className="title">Connexion</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>L'identifiant </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Mot de passe </label>
              <input type="password" name="upass" required />
              {renderErrorMessage("upass")}
              <br></br><br></br>
              <label>date de nisance </label>
              <input type="date" name="dat" required onChange={(e)=>setDat(e.target.value)} /><br></br><br></br>
             <p>Date :   {dat}</p>
              <label>vile </label>
              <select onChange={(e)=>setVile(e.target.value)}>
                <option>Agadir</option>
                <option>Csablanca</option>
                <option>Rabat</option>
                <option>Tange</option>
              </select><br></br><br></br>
              <p>vile {vile}</p>
              <label>Genre </label>
              <input type="radio" name="genr" value="Homme" onChange={(e)=>setGenr(e.target.value)} />Homme
              <input type="radio" name="genr" value="Femme"  onChange={(e)=>setGenr(e.target.value)}/>Femme<br></br><br></br>
             <p>Genre {genr}</p>
              
            
    

            <div className="input-container">
                <span>Loisir:</span>
                {
                    loisirs.map((loisir, index) => (
                        <label key={`loisir-${index}`}><input type="checkbox" name="loisir" value={loisir} onChange={(e) => {
                            if(e.target.checked){
                                setLois([...lois, e.target.value])
                            }else{
                                setLois(lois.filter(hobby => hobby !== e.target.value))
                            }
                        }
                        } /> {loisir}</label>))

                }
                <p>loiser :{lois}</p>
              </div>


              <br></br><br></br>
              <label>Photo </label>
              <input type="file" name='photo' />
              

            </div>
            <div className="button-container">
              <input type="submit" value="Se connecter" />
            </div>
          </form>
        </div>
      </div>
            )
  return (
    
    <div className="app">
{isSubmitted ? <div><div className="title">Accueil</div><div>Bonjour {name}</div></div> : renderForm}
</div>

      )

}
export default Inscription;
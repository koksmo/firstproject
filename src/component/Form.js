import { useState } from "react";


function Form() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
   setIsSubmitted(true);
 
  }
    
  
  const chang = (e)=>{
    setName(e.target.value)
    
  }
  const chan = (e)=>{
    setText(e.target.value)
    
  }

const rederForm =
 <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"  onChange={chang}/>
      </label><br/>
      
      <label>Enter your coument:
        <textarea  onChange={chan}>give tour text</textarea>
      </label><br/>
     <input type="submit" /><br/>
    </form>
 
 return (
    
    <div className="app">
{isSubmitted ? <div><div
className="title">Accueil</div><div>Hello MR  {name}  {text}</div></div> : 
rederForm}
</div>

      )

}

export default Form;
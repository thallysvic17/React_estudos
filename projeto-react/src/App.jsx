import {useState } from "react";

import Perfil from "./Components/Perfil";
import Formulario from "./Components/Formulario";
import ReposList from "./Components/ReposList";




function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');


  return ( // todo codigo react retorna um codigo html 
    <>
      <input type="text" onBlur={(e)=> setNomeUsuario(e.target.value)}/>


      {nomeUsuario.length > 4 &&(
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}




      {/* {FormularioEstaVisivel &&(
         <Formulario />
      )}


      <button  onClick={()=> setFormularioEstaVisivel(!FormularioEstaVisivel)}type="button">toggle form</button> */}
    </>
  )
}


export default App


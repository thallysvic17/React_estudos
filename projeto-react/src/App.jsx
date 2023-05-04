import {useState } from "react";

import Perfil from "./Components/Perfil";
import Formulario from "./Components/Formulario";
import ReposList from "./Components/ReposList";




function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return ( // todo codigo react retorna um codigo html 
    <>
      <Perfil nome='thallys alves' endereco='https://github.com/thallysvic17.png'/>
      <ReposList/>
      {/* {FormularioEstaVisivel &&(
         <Formulario />
      )}


      <button  onClick={()=> setFormularioEstaVisivel(!FormularioEstaVisivel)}type="button">toggle form</button> */}
    </>
  )
}


export default App


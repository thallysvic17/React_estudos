import { useState, useEffect} from "react";

const Formulario = () =>{


   const [materiaA, setMateriaA] = useState(0);
   const [materiaB, setMateriaB] = useState(0);
   const [materiaC, setMateriaC] = useState(0);
   const [nome, setnome]= useState('');





    useEffect(()=> {
        console.log('o componente iniciou')

        return () =>{
            console.log('o coomponente finalizou')
        }
    },[]);


    useEffect(()=> {
        console.log('o estado  nome mudou')
    },[nome]);

    useEffect(()=>{
        console.log('materia A mudou para:' + materiaA)
    },[materiaA, materiaB, materiaC])

    const alteraNome = (evento) =>{
        

        setnome(() => {
            

            return evento.target.value;
        })
    }

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma/3

        if(media >=7){
            return (
                <p>Olá {nome}, voce Foi Aprovado!</p>
            )
        }else{
            return(
                <p>Ola {nome},  voce nao foi Aprovado!</p>
            )
        }
    }
    

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item =>(
                    <li key={item}>{item}</li>
                 ))}
            </ul>
            
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C"onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;
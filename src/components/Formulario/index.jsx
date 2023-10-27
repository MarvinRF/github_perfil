/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const Formulario = (props) =>{

  const [materiaA, setmateriaA] = useState(0);
  const [materiaB, setmateriaB] = useState(0);
  const [materiaC, setmateriaC] = useState(0);
  const [nome, setNome] = useState('');

useEffect(()=>{
console.log('o componente iniciou')
  return () =>{
    console.log('o componentes foi desmontado')
  }
},[]);


  useEffect(()=>{
    console.log(" o nome Mudou");
  },[nome])

  const alteranome = (evento) =>{
    setNome(estadoAnterior =>{
      //console.log(estadoAnterior);
      return evento.target.value
    })
  }

  const renderizaResultado = () =>{
  const soma = materiaA + materiaB + materiaC;
  const media = soma / 3;

  if(media >= 7){
  return(
    <p>O {nome} passou na média!</p>
  )
  }else{
    return(
      <p>O {nome} não passou na média.</p>
    )
  }
}

  return(
    <form>

      <ul>
      {[1,2,3,4,5].map(item => (
      <>
      <li key={item}>{item}</li>
      </>
      ))}
      </ul>

      <input 
      type="text"
      placeholder="Seu nome" 
      onChange={alteranome}
      />
      <input 
      type="number" 
      placeholder="nota materia A" 
      onChange={({target}) => setmateriaA(parseInt(target.value))}
      />
      <input 
      type="number" 
      placeholder="nota materia B"
      onChange={evento => setmateriaB(parseInt(evento.target.value))}
      />
      <input 
      type="number" 
      placeholder="nota materia C"
      onChange={evento => setmateriaC(parseInt(evento.target.value))}
      />
        <h2>{renderizaResultado()}</h2>
      </form>
    )
  }


export default Formulario;
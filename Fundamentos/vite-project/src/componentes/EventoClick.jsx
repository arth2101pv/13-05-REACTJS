import React from 'react'

const EventoClick = () => {

    // 8 - Função com handleClick
const handleClick = () => {
    console.log("handleClick executou!")
  }

  //9 - Função de Renderização
  const renderizando = (x) => {
    if(x) {
        return <h1>Renderizando X</h1>
    } else{
        return <h1>Renderizando Y</h1>
    }
  }

  return (
    <div>
        <div>
            <button onClick = {() => console.log("teste click")}>Clique Aqui</button>
        </div>

        {/*Chamando função com handleClick */}
        <div>
            <button onClick={handleClick}>Botão com função</button>
        </div>
        
            {/* Retornando a função com renderização*/}
            <div>{renderizando(true)}</div>
    </div>
  )
};

export default EventoClick;
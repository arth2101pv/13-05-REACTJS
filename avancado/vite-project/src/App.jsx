import './App.css'

// 10 - Importando imagem do Assets
import ibirapuera from "./assets/Ibirapuera.jpg";

//11 - Importando Hooks - userState
import Dados from './componentes/Dados';

function App() {

  return (
    <div className="AppAvancado">
      <h1>Próximos passos React JS</h1>

      {/* 9 - Inserindo imagem d public */}
      <img src="/SP.jpg" alt='imagem de Cima, São Paulo' />
    {/*Importando imagem do assets */}
    <img src={ibirapuera} alt="Foto do Parque Ibirapuera" />

    {/* importando Hooks */}
    <Dados />
    </div>
  )
}

export default App

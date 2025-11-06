import { useState } from 'react'
import Cabecalho from './componentes/cabecalho/cabecalho'
import Inicio from './componentes/inicio/inicio'
import Sobre from './componentes/sobre/sobre'
import Servicos from './componentes/servicos/servicos'
import Projectos from './componentes/projectos/projectos'
import Rodape from './componentes/rodape/rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1A1A29] min-h-screen'>
        <Cabecalho/>
        <Inicio/>
        <Sobre/>
        <Servicos/>
        <Projectos/>
        <Rodape/>
    </div>

    /*Feito pelo Engeheiro Celso Paulo Cundiati Huma.*/
  )
}

export default App

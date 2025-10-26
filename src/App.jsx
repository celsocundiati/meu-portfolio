import { useState } from 'react'
import Cabecalho from './componentes/cabecalho/cabecalho'
import Inicio from './componentes/inicio/inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1A1A29] min-h-screen'>
        <Cabecalho/>
        <Inicio/>
    </div>
  )
}

export default App

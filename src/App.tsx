import { Route, Routes } from 'react-router-dom'
import { Comanda } from './pages/comanda'
import { ListaDeComandas } from './pages/listaDeComandas'
import { Produtos } from './pages/produtos'
import "./App.css"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<ListaDeComandas />} />
        <Route path='comanda' element={<Comanda />} />
        <Route path='produtos' element={<Produtos />} />        
      </Routes>
    </div>
  )
}

export default App

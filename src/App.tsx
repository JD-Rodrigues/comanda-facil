import { Route, Routes } from 'react-router-dom'
import { Comanda } from './pages/comanda'
import { ListaDeComandas } from './pages/listaDeComandas'
import { Produtos } from './pages/produtos'
import "./App.css"
import { FecharComanda } from './pages/fecharComanda'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<ListaDeComandas />} />
        <Route path='comanda' element={<Comanda />} />
        <Route path='/fechar-comanda' element={<FecharComanda />} />
        <Route path='produtos' element={<Produtos />} />        
      </Routes>
      <footer className="footer container">
          <p>© 2022 - Desenvolvido por 
            <span className='desenvolvedor'> Domingos Rodrigues</span>
          </p>
      </footer>
    </div>
  )
}

export default App

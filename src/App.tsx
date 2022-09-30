import { Route, Routes } from 'react-router-dom'
import { Comanda } from './pages/comanda'
import { ListaDeComandas } from './pages/listaDeComandas'
import { ListaDeProdutos } from './pages/ListaDeProdutos'
import "./App.css"
import { FecharComanda } from './pages/fecharComanda'
import { useEffect, useState } from 'react'
import { carregarDados, salvarDados } from './services'
import { IComanda, IProduto } from './types'

function App() {

  const [comandas, setComandas] = useState<IComanda[] | null>(null)
  const [produtos, setProdutos] = useState<IProduto[] | null>(null)
  const [comandaSelecionada, setComandaSelecionada] = useState("")

  useEffect(() => {
    const comandasDoStorage = carregarDados("comandas")
    const produtosDoStorage = carregarDados("produtos")

    comandasDoStorage && setComandas(comandasDoStorage)
    produtosDoStorage && setProdutos(produtosDoStorage)
  },[])

  useEffect(()=>{
    comandas && salvarDados("comandas", comandas)
  },[comandas])

  useEffect(()=>{
    produtos && salvarDados("produtos", produtos)
  },[produtos])

  return (
    <div>
        <Routes>
          <Route path='/' element={<ListaDeComandas comandas={comandas} setComandas={setComandas} setComandaSelecionada={setComandaSelecionada}/>} />
          <Route path='comanda' element={<Comanda comandaSelecionada={comandaSelecionada} />} />
          <Route path='/fechar-comanda' element={<FecharComanda />} />
          <Route path='produtos' element={<ListaDeProdutos produtos={produtos} setProdutos={setProdutos} comandaSelecionada={comandaSelecionada} />} />        
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

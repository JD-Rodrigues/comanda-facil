import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal"

export const ListaDeComandas = () => {
    const [novaComanda, setNovaComanda] = useState(false)
    return(
        <div className="container">
            <header className="header">
                <p>Comandas</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/produtos">
                            <li className="menu__item"></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <div onClick={()=>setNovaComanda(true)} className="add">
                    <div>+</div>
                </div>
            </main>
            
            <Modal toggle={novaComanda} nomeDoModal="Nome da comanda:">
                <input type="text"/>
                <button onClick={()=>setNovaComanda(false)}>Cancelar</button>
                <button>Adicionar</button>
            </Modal>
            
        </div>
    )
}
import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal"


export const ListaDeProdutos = () => {
    const [novoProduto, setNovoProduto] = useState(false)

    return(
        <div className="container">
            <header className="header">
                <p>Produtos</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/produtos">
                            <li className="menu__item"></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <div className="add" onClick={()=>setNovoProduto(true)}>
                    <div>+</div>
                </div>

                <Modal toggle={novoProduto} nomeDoModal="Nome da comanda:">
                <input type="text"/>
                <button onClick={()=>setNovoProduto(false)}>Cancelar</button>
                <button>Adicionar</button>
                </Modal>
            </main>
        </div>
    )
}


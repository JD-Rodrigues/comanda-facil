import { Link } from "react-router-dom"
import { calcularTotalGastoEmComanda, carregarDados, mascaraDePreco } from "../../services"
import { IComanda, IComandaProps } from "../../types"
import styles from "./styles.module.css"



export const Comanda = ({comandaSelecionada}:IComandaProps) => {
    const listaDeComandas = carregarDados("comandas")
    const [estaComanda] = listaDeComandas.filter((comanda:IComanda)=>comanda.nome === comandaSelecionada)

    const total = String(calcularTotalGastoEmComanda(estaComanda))
    const totalAPagar = mascaraDePreco(total)

    return(
        <div className="container">
            <header className="header">
                <h1>Comanda "{comandaSelecionada}"</h1>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/cardapio">
                            <li className="menu__item"></li>
                        </Link>
                        <Link to="/fechar-comanda">
                            <li className="menu__item"></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <header className={styles.total}>
                    <p>Total</p>
                    <p>R$ {totalAPagar}</p>
                </header>
            </main>
        </div>
    )
}
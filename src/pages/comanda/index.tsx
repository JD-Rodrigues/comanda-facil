import { Link } from "react-router-dom"
import { IComandaProps } from "../../types"



export const Comanda = ({comandaSelecionada}:IComandaProps) => {

    return(
        <div className="container">
            <header className="header">
                <p>Comanda "{comandaSelecionada}"</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/fechar-comanda">
                            <li className="menu__item"></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                {}
            </main>
        </div>
    )
}
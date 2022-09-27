import { Link } from "react-router-dom"


export const Comanda = () => {
    return(
        <div className="container">
            <header className="header">
                <p>Comanda""</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/fechar-comanda">
                            <li className="menu__item"></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main"></main>
        </div>
    )
}
import { Link } from "react-router-dom"


export const Produtos = () => {
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
                <div className="add"><div>+</div></div>
            </main>
        </div>
    )
}


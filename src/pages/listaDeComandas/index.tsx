import styles from "./styles.module.css"

export const ListaDeComandas = () => {
    return(
        <div className="container">
            <header className="header">
                <p>Comandas</p>
                <div className={styles.cadastrar__produto}></div>
            </header>
            <main className="main"></main>
        </div>
    )
}
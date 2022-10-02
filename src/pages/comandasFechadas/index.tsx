import { Link, useNavigate } from "react-router-dom"
import { calcularTotalGastoEmComanda } from "../../services"
import { IComandasFechadasProps, IListaDeComandasProps } from "../../types"
import styles from "./styles.module.css"
import { CardComanda } from "../../components/cardComanda"
import home from "../../assets/images/home.png"
import abertas from "../../assets/images/aberto-inativo.png"
import fechadas from "../../assets/images/fechado-ativo.png"

export const ComandasFechadas = ({comandas, setComandaSelecionada}:IComandasFechadasProps) => {

    const navigate = useNavigate()

    const comandasGrid = comandas && comandas.map(comanda =>{
        if(!comanda.aberta) {
            let total = calcularTotalGastoEmComanda(comanda)
            return <CardComanda key={comanda.nome} nomeDaComanda={comanda.nome} soma={total} setComandaSelecionada={setComandaSelecionada}/>
        }
    })     


    return(
        <div className="container">
            <header className="header">
                <p>Comandas Fechadas</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/">
                            <li className={styles.menu__item}>
                                <img src={home}/>
                            </li>
                        </Link> 
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <ul className={styles.cards__comandas}>
                    {comandasGrid}
                </ul>
                <nav className={styles.nav__comandas}>
                    <div className={styles.nav__comandas__btn} id={styles.comandas__abertas} onClick={()=>navigate("/")} >
                        <img className={styles.nav__comandas__img} src={abertas} alt="" />
                        <p className={styles.comanda__aberta__txt}>Abertas</p>
                    </div>
                    <div className={styles.nav__comandas__btn}>
                    <img className={styles.nav__comandas__img} src={fechadas} alt="" />
                        <p className={styles.comanda__fechada__txt}>Fechadas</p>
                    </div>
                </nav>
            </main>                       
        </div>
    )
}
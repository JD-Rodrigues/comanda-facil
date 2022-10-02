import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CardProdutoDaComanda } from "../../components/cardProdutoDaComanda"
import { Modal } from "../../components/modal"
import { calcularTotalGastoEmComanda, carregarDados, fecharComanda, mascaraDePreco } from "../../services"
import { IComanda, IComandaProps, IProdutoConsumido } from "../../types"
import pagar from "../../assets/images/pagar.png"
import comida from "../../assets/images/food.png"
import home from "../../assets/images/home.png"
import styles from "./styles.module.css"



export const Comanda = ({comandaSelecionada, setComandas}:IComandaProps) => {

    const navigate = useNavigate()
    const[abrirModal, setAbrirModal] = useState(false)
    const listaDeComandas = carregarDados("comandas")
    const [estaComanda] = listaDeComandas.filter((comanda:IComanda)=>comanda.nome === comandaSelecionada)

    const total = String(calcularTotalGastoEmComanda(estaComanda))
    const totalAPagar = total === "0" ? mascaraDePreco("000") : mascaraDePreco(total)

    const cardsDeProdutosConsumidos = estaComanda.consumo.map((item:IProdutoConsumido)=> <li key={item.nome}><CardProdutoDaComanda  produto={item}/></li>)

    const fecharComandaAtual = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const comandasAtualizadas = fecharComanda(comandaSelecionada)
        setComandas(comandasAtualizadas)
        navigate("/")
    }

    return(
        <div className="container">
            <header className="header">
                <h1>Comanda "{comandaSelecionada}"</h1>
                <nav>
                    <ul className={styles.menu__list}>                                      {
                        estaComanda.aberta === true 
                            ? 
                                <>   
                                    <Link to="/cardapio">
                                    <li className={styles.menu__item}><img src={comida} /></li>
                                    </Link>
                                    <li className={styles.menu__item} onClick={()=>setAbrirModal(true)}><img src={pagar}></img></li>
                                    <Link to="/">
                                    <li className={styles.menu__item}>
                                        <img src={home}/>
                                    </li>
                                    </Link> 
                                </>
                            :
                            <>
                                <p>Comanda fechada</p>
                                <Link to="/">
                                    <li className={styles.menu__item}>
                                        <img src={home}/>
                                    </li>
                                </Link> 
                            </>                                
                        }

                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <header className={styles.total}>
                    <p>Total</p>
                    <p>R$ {totalAPagar}</p>
                </header>
                <ul className={styles.lista__produtos__consumidos}>
                    {cardsDeProdutosConsumidos}
                </ul>
            </main>

            <Modal toggle={abrirModal} nomeDoModal="Fechar comanda?">
                <div className={styles.adicionar__cancelar__btn}>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        setAbrirModal(false)}
                    }
                    >   Cancelar
                    </button>
                    <button onClick={fecharComandaAtual}>Fechar comanda</button>
                </div>
            </Modal>
        </div>
    )
}
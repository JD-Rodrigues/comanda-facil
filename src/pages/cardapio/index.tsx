import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CardProdutoMenu } from "../../components/cardProdutoMenu"
import { Modal } from "../../components/modal"
import { atualizarComanda} from "../../services"
import { ICardapioProps } from "../../types"
import home from "../../assets/images/home.png"
import styles from "./styles.module.css"



export const Cardapio = ({produtos, comandaSelecionada, setComandas}:ICardapioProps) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState<string | null>(null)

    const navigate = useNavigate()

    const adicionarProdutoNaComanda = ()=> {
        

        produtoSelecionado && setComandas && atualizarComanda(comandaSelecionada, produtoSelecionado, setComandas)
        navigate(-1)
    }

    useEffect(()=>{
        produtoSelecionado && adicionarProdutoNaComanda()
    },[produtoSelecionado])

    return(
        <div className="container">
            <header className="header">
                <p>Cardápio</p>
                <nav id={styles.menu} className="menu">  
                <Link to="/">
                    <img src={home}/>        
                </Link>              
                </nav>                
            </header>
            <main className="main">
                <ul className={styles.lista}>
                    {produtos && produtos.map(produto => 
                    <li 
                        key={produto.nome} 
                        onClick={()=>{
                            setProdutoSelecionado(produto.nome)
                            adicionarProdutoNaComanda()
                        }
                    }>
                        <CardProdutoMenu 
                            nome={produto.nome} 
                            valor={produto.valorUnit}
                        />
                    </li>)}
                </ul>
            </main>
        </div>
    )
}


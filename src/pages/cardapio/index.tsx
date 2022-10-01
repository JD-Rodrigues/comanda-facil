import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardProdutoMenu } from "../../components/cardProdutoMenu"
import { Modal } from "../../components/modal"
import { atualizarComanda} from "../../services"
import { ICardapioProps } from "../../types"
import styles from "./styles.module.css"


export const Cardapio = ({produtos, comandaSelecionada, setComandas}:ICardapioProps) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState<string | null>(null)

    const adicionarProdutoNaComanda = ()=> {
        produtoSelecionado && setComandas && atualizarComanda(comandaSelecionada, produtoSelecionado, setComandas)
    }

    useEffect(()=>{
        produtoSelecionado && adicionarProdutoNaComanda()
    },[produtoSelecionado])

    return(
        <div className="container">
            <header className="header">
                <p>Cardápio</p>
                <nav className="menu">                
                </nav>                
            </header>
            <main className="main">
                <ul>
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


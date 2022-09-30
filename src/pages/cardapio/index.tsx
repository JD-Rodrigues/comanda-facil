import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardProdutoMenu } from "../../components/cardProdutoMenu"
import { Modal } from "../../components/modal"
import { adicionarItemNaComanda} from "../../services"
import { ICardapioProps } from "../../types"
import styles from "./styles.module.css"


export const Cardapio = ({produtos, comandaSelecionada}:ICardapioProps) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState<string | null>(null)
    const [abrirModal, setAbrirModal] = useState(false)

    const adicionarProdutoAComanda = ()=> {

    }

    useEffect(()=>{
        produtoSelecionado && adicionarItemNaComanda(comandaSelecionada, produtoSelecionado)
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
                    {produtos && produtos.map(produto=> <CardProdutoMenu key={produto.nome} nome={produto.nome} valor={produto.valorUnit} setProdutoSelecionado={setProdutoSelecionado}  />)}
                </ul>

                <Modal toggle={abrirModal} nomeDoModal="Novo Produto:">
                    <div>
                    <p>Gostaria de adicionar este produto à comanda "{comandaSelecionada}"</p>
                        <button onClick={()=>setAbrirModal(false)}>
                            Cancelar
                        </button>
                        <button onClick={adicionarProdutoAComanda}>Adicionar</button>
                    </div>
                </Modal>
            </main>
        </div>
    )
}


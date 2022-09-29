import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal"
import { adicionarProduto, mascaraDePreco, validacaoDePreco } from "../../services"
import { IListaDeProdutosProps } from "../../types"
import styles from "./styles.module.css"


export const ListaDeProdutos = ({produtos, setProdutos}:IListaDeProdutosProps) => {
    const [abrirModal, setAbrirModal] = useState(false)

    const mascaraDeValor = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valorTratado = mascaraDePreco(validacaoDePreco(e.target.value))
        e.target.value = `${valorTratado}`
    }

    const adicionarNovoProduto = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const campoNome = document.querySelector("#novo__produto__nome") as HTMLInputElement
        const campoValor = document.querySelector("#novo__produto__valor") as HTMLInputElement

        adicionarProduto(campoNome.value, campoValor.value, setProdutos)
        campoNome.value = ""
        campoValor.value = ""

        setAbrirModal(false)
    }

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
                <div className="add" onClick={()=>setAbrirModal(true)}>
                    <div>+</div>
                </div>

                <Modal toggle={abrirModal} nomeDoModal="Novo Produto:">
                    <input type="text" id="novo__produto__nome" placeholder="Nome do produto"/>
                    <input type="text" id="novo__produto__valor" onChange={mascaraDeValor} placeholder="Preço do produto"/>
                    <div className={styles.adicionar__cancelar__btn}>
                        <button onClick={()=>setAbrirModal(false)}>
                            Cancelar
                        </button>
                        <button onClick={adicionarNovoProduto}>Adicionar</button>
                    </div>
                </Modal>
            </main>
        </div>
    )
}


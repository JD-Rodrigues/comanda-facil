import React, { useState } from "react"
import { Link } from "react-router-dom"
import { CardProdutoEstoque } from "../../components/cardProdutoEstoque"
import { Modal } from "../../components/modal"
import { cadastrarProduto, checarItemRepetido, mascaraDePreco, validacaoDePreco } from "../../services"
import { IEstoqueDeProdutosProps } from "../../types"
import styles from "./styles.module.css"


export const EstoqueDeProdutos = ({produtos, setProdutos}:IEstoqueDeProdutosProps) => {
    const [abrirModal, setAbrirModal] = useState(false)

    const mascaraDeValor = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valorTratado = mascaraDePreco(validacaoDePreco(e.target.value))
        e.target.value = `${valorTratado}`
    }

    const cadastrarNovoProduto = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const campoNome = document.querySelector("#novo__produto__nome") as HTMLInputElement

        const campoValor = document.querySelector("#novo__produto__valor") as HTMLInputElement

        if (checarItemRepetido(campoNome.value, produtos)){
            campoNome.value = ""
            campoValor.value = ""
            alert("Ops! Já existe um produto com esse nome!")
        }else {
            produtos && cadastrarProduto(campoNome.value, campoValor.value, setProdutos)
            campoNome.value = ""
            campoValor.value = ""
    
            setAbrirModal(false)
        }              
    }

    return(
        <div className="container">
            <header className="header">
                <p>Estoque</p>
                <nav className="menu">
                    <ul className="menu__list">
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <ul>
                    {produtos && produtos.map(produto=> <CardProdutoEstoque key={produto.nome} nome={produto.nome} valor={produto.valorUnit}  />)}
                </ul>
                
                <div className="add" onClick={()=>setAbrirModal(true)}>
                    <div>+</div>
                </div>

                <Modal toggle={abrirModal} nomeDoModal="Novo Produto:">
                    <input type="text" id="novo__produto__nome" placeholder="Nome do produto"/>
                    <input type="text" id="novo__produto__valor" onChange={mascaraDeValor} placeholder="Preço do produto"/>
                    <div className={styles.adicionar__cancelar__btn}>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            setAbrirModal(false)
                        }}>
                            Cancelar
                        </button>
                        <button onClick={cadastrarNovoProduto}>Adicionar</button>
                    </div>
                </Modal>
            </main>
        </div>
    )
}


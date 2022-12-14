import React, { useState } from "react"
import { Link } from "react-router-dom"
import { CardProdutoEstoque } from "../../components/cardProdutoEstoque"
import { Modal } from "../../components/modal"
import { cadastrarProduto, checarItemRepetido, mascaraDePreco, validacaoDePreco } from "../../services"
import { IEstoqueDeProdutosProps } from "../../types"
import home from "../../assets/images/home.png"
import add from "../../assets/images/add.png"
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
                        <Link to="/">
                            <li className={styles.menu__item}>
                                <img src={home}/>
                            </li>
                        </Link> 
                    </ul>                    
                </nav>                
            </header>
            <main className="main" >
                <ul id={styles.lista}>
                    {produtos && produtos.map(produto=> <CardProdutoEstoque key={produto.nome} nome={produto.nome} valor={produto.valorUnit}  />)}
                </ul>
                
                <div className="add" id={styles.add__wrapper} onClick={()=>setAbrirModal(true)}>
                    <img src={add} />
                </div>

                <Modal toggle={abrirModal} nomeDoModal="Novo Produto:">
                    <input className={styles.modal__input} type="text" id="novo__produto__nome" placeholder="Nome do produto"/>
                    <input className={styles.modal__input} type="text" id="novo__produto__valor" onChange={mascaraDeValor} placeholder="Preço do produto"/>
                    <div className={styles.adicionar__cancelar}>
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


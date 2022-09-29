import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal"
import { adicionarComanda, checarItemRepetido } from "../../services"
import { IListaDeComandasProps } from "../../types"
import iconeErro from "../../assets/images/alerta-erro.png"
import styles from "./styles.module.css"
import { CardComanda } from "../../components/cardComanda"
import { ModalAlert } from "../../components/modalAlert"

export const ListaDeComandas = ({comandas,setComandas}:IListaDeComandasProps) => {
    const [abrirModal, setAbrirModal] = useState(false)
    const [abrirModalErro, setAbrirModalErro] = useState(false)

    const comandasGrid = comandas && comandas.map(comanda =>{
        let total = comanda.consumo.reduce((soma, item) =>  (item.quantidade * item.valorUnit), 0 )
        return <CardComanda key={comanda.nome} nomeDaComanda={comanda.nome} soma={total} />
    })

    const adicionarNovaComanda = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const campoNomeDaComanda = document.querySelector("#nova__comanda") as HTMLInputElement

        if(checarItemRepetido(campoNomeDaComanda.value,"comandas")) {
            
            campoNomeDaComanda.value = ""
            setAbrirModal(false)
            setAbrirModalErro(true)
            
        } else {
            comandas && adicionarComanda(campoNomeDaComanda.value, setComandas)
            campoNomeDaComanda.value = ""
            setAbrirModal(false)
        }         
    }


    return(
        <div className="container">
            <header className="header">
                <p>Comandas</p>
                <nav className="menu">
                    <ul className="menu__list">
                        <Link to="/produtos">
                            <li className="menu__item"></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <ul>
                    {comandasGrid}
                </ul>
                <div onClick={()=>setAbrirModal(true)} className="add">
                    <div>+</div>
                </div>
            </main>

                       
            {/* {abrirModal && <Modal toggle={abrirModal} nomeDoModal="Nome da comanda:">
                <input type="text" id="nova__comanda"/>
                <div className={styles.adicionar__cancelar__btn}>
                    <button onClick={()=>setAbrirModal(false)}>Cancelar</button>
                    <button onClick={adicionarNovaComanda}>Adicionar</button>
                </div>
            </Modal>} 

            { abrirModalErro && <ModalAlert toggle={abrirModalErro} nomeDoModal="Ops!">
                <img src={iconeErro} className="icone__erro" />
                <p>Já existe uma demanda com este nome!</p>
                <button onClick={()=>setAbrirModalErro(false)}>Voltar</button>
            </ModalAlert> } */}

            
            
        </div>
    )
}
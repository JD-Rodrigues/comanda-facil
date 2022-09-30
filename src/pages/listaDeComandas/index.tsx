import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal"
import { adicionarComanda, checarItemRepetido } from "../../services"
import { IListaDeComandasProps } from "../../types"
import styles from "./styles.module.css"
import { CardComanda } from "../../components/cardComanda"

export const ListaDeComandas = ({comandas,setComandas, setComandaSelecionada}:IListaDeComandasProps) => {

    const [abrirModal, setAbrirModal] = useState(false)

    const comandasGrid = comandas && comandas.map(comanda =>{
        let total = comanda.consumo && comanda.consumo.reduce((soma, item) =>  (item.quantidade * item.valorUnit), 0 )
        return <CardComanda key={comanda.nome} nomeDaComanda={comanda.nome} soma={total} setComandaSelecionada={setComandaSelecionada}/>
    })

    const adicionarNovaComanda = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const campoNomeDaComanda = document.querySelector("#nova__comanda") as HTMLInputElement

        if(checarItemRepetido(campoNomeDaComanda.value,comandas)) {
            campoNomeDaComanda.value = ""
            alert("Ops! Já existe uma comanda com esse nome!")
            
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

                       
            <Modal toggle={abrirModal} nomeDoModal="Nome da comanda:">
                <input type="text" id="nova__comanda"/>
                <div className={styles.adicionar__cancelar__btn}>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        setAbrirModal(false)}
                    }
                    >   Cancelar
                    </button>
                    <button onClick={adicionarNovaComanda}>Adicionar</button>
                </div>
            </Modal>

            
            
        </div>
    )
}
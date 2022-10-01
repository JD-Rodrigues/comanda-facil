import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal"
import { adicionarComanda, checarItemRepetido } from "../../services"
import { IComanda, IListaDeComandasProps, IProdutoConsumido } from "../../types"
import styles from "./styles.module.css"
import { CardComanda } from "../../components/cardComanda"
import estoque from "../../assets/images/estoque.png"

export const ListaDeComandas = ({comandas,setComandas, setComandaSelecionada}:IListaDeComandasProps) => {

    const [abrirModal, setAbrirModal] = useState(false)

    const comandasGrid = comandas && comandas.map(comanda =>{
        let total = comanda.consumo && comanda.consumo.reduce((acc, item) =>  acc + item.quantidade * item.valorUnit,0)
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
                        <Link to="/estoque">
                            <li className="menu__item"><img className={styles.icone__estoque} src={estoque} alt="Cadastrar produto" title="Cadastrar produto"></img></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <ul className={styles.cards__comandas}>
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
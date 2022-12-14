import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Modal } from "../../components/modal"
import { adicionarComanda, calcularTotalGastoEmComanda, checarItemRepetido } from "../../services"
import { IComanda, IListaDeComandasProps, IProdutoConsumido } from "../../types"
import styles from "./styles.module.css"
import { CardComanda } from "../../components/cardComanda"
import estoque from "../../assets/images/estoque.png"
import add from "../../assets/images/add.png"
import abertas from "../../assets/images/aberto-ativo.png"
import fechadas from "../../assets/images/fechado-inativo.png"

export const ListaDeComandas = ({comandas,setComandas, setComandaSelecionada}:IListaDeComandasProps) => {

    const [abrirModal, setAbrirModal] = useState(false)
    const navigate = useNavigate()

    const comandasGrid = comandas && comandas.map(comanda =>{
        if(comanda.aberta) {
            let total = calcularTotalGastoEmComanda(comanda)
            return <CardComanda key={comanda.nome} nomeDaComanda={comanda.nome} soma={total} setComandaSelecionada={setComandaSelecionada}/>
        }
    })

    const adicionarNovaComanda = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const campoNomeDaComanda = document.querySelector("#input__comanda__nome") as HTMLInputElement
        console.log(campoNomeDaComanda)
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
                    <ul className={styles.menu__list}>
                        <Link to="/estoque">
                            <li className={styles.menu__item}><img src={estoque} alt="Cadastrar produto" title="Cadastrar produto"></img></li>
                        </Link>
                    </ul>                    
                </nav>                
            </header>
            <main className="main">
                <ul className={styles.cards__comandas}>
                    {comandasGrid}
                </ul>
                
                <nav className={styles.nav__comandas}>
                    <div className={styles.nav__comandas__btn}>
                        <img className={styles.nav__comandas__img} src={abertas} alt="" />
                        <p className={styles.comanda__aberta__txt}>Abertas</p>
                    </div>
                    <div onClick={()=>setAbrirModal(true)} className="add">
                        <img src={add} />
                    </div>
                    <div onClick={()=>navigate("/comandas-fechadas")} className={styles.nav__comandas__btn} id={styles.comandas__fechadas}>
                    <img className={styles.nav__comandas__img} src={fechadas} alt="" />
                        <p className={styles.comanda__fechada__txt}>Fechadas</p>
                    </div>
                </nav>
            </main>

                       
            <Modal toggle={abrirModal} nomeDoModal="Nome da comanda:">
                <input type="text" id="input__comanda__nome" className={styles.nome__comanda__input}/>
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
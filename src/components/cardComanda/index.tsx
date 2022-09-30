import { useNavigate } from "react-router-dom"
import { ICardComandaProps } from "../../types"
import styles from "./styles.module.css"


export const CardComanda = ({nomeDaComanda, soma, setComandaSelecionada}:ICardComandaProps) => {
  const total = soma && soma.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
  const navigate = useNavigate()
  const irPraComanda = () =>{    
    setComandaSelecionada(nomeDaComanda)
    navigate("/comanda")
  }

  return(
    <li className={styles.card__wrapper} onClick={irPraComanda}>
      <nav><img></img></nav>
      <p>{nomeDaComanda}</p>
      <p>{total}</p>
    </li>
  )
} 
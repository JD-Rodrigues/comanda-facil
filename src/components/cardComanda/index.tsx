import { useNavigate } from "react-router-dom"
import { mascaraDePreco } from "../../services"
import { ICardComandaProps } from "../../types"
import styles from "./styles.module.css"


export const CardComanda = ({nomeDaComanda, soma, setComandaSelecionada}:ICardComandaProps) => {
  const total = soma === 0 ? mascaraDePreco("000") : mascaraDePreco(String(soma))
  const navigate = useNavigate()
  const irPraComanda = () =>{    
    setComandaSelecionada(nomeDaComanda)
    navigate("/comanda")
  }

  return(
    <li className={styles.card__wrapper} onClick={irPraComanda}>
      <p className={styles.nome__da__comanda}>{nomeDaComanda}</p>
      <p>R$ {total}</p>
    </li>
  )
} 
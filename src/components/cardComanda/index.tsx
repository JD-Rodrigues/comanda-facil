import { mascaraDePreco } from "../../services"
import { ICardComandaProps } from "../../types"
import styles from "./styles.module.css"


export const CardComanda = ({nomeDaComanda, soma}:ICardComandaProps) => {
  const total = mascaraDePreco(String(soma))

  return(
    <li className={styles.card__wrapper}>
      <nav><img></img></nav>
      <p>{nomeDaComanda}</p>
      <p>{total}</p>
    </li>
  )
} 
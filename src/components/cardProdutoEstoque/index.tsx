import { mascaraDePreco } from "../../services"
import { ICardProdutoEstoqueProps } from "../../types"
import styles from "./styles.module.css"

export const CardProdutoEstoque = ({nome, valor}:ICardProdutoEstoqueProps)=>{
  const valorFormatado = mascaraDePreco(String(valor))
  return(
    <li className={styles.card__wrapper}>
      <p>{nome}</p>
      <p>{`R$${valorFormatado}`}</p>
    </li>
  )
}
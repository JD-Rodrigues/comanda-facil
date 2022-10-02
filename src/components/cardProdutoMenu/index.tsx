import { mascaraDePreco } from "../../services"
import { ICardProdutoMenuProps } from "../../types"
import styles from "./styles.module.css"

export const CardProdutoMenu = ({nome, valor}:ICardProdutoMenuProps)=>{
  const valorFormatado = mascaraDePreco(String(valor))
  return(
    <div className={styles.card__wrapper}>
      <p>{nome}</p>
      <p>{`R$${valorFormatado}`}</p>
    </div>
  )
}
import { mascaraDePreco } from "../../services"
import { ICardProdutoDaComandaProps } from "../../types"
import styles from "./styles.module.css"
import leftArrow from "../../assets/images/arrow-left.png"
import rightArrow from "../../assets/images/arrow-right.png"
import trash from "../../assets/images/trash.png"


export const CardProdutoDaComanda = ({produto}:ICardProdutoDaComandaProps) => {
  const valorUnit = mascaraDePreco(String(produto.valorUnit))
  const total = mascaraDePreco(String(produto.valorUnit * produto.quantidade))
  return(
    <div className={styles.card__wrapper}>
      <div className={styles.titulo}>
        <p>{produto.nome}</p>
        <p>R$ {valorUnit}</p>
      </div>
      <p className={styles.total__info}>Valor gasto com este produto: <span className={styles.total}>R$ {total}</span></p>
      <div className={styles.painel}>
        <div className={styles.editar__quantidade}>
          <img src={leftArrow} className={styles.incremento}></img>
          <input className={styles.quantidade} type="text" value="1" />
          <img src={rightArrow}  className={styles.decremento}></img>
        </div>
        <img className={styles.delete} src={trash} />
      </div>
    </div>
  )
}
import { mascaraDePreco } from "../../services"
import { ICardProdutoProps } from "../../types"

export const CardProduto = ({nome, valor}:ICardProdutoProps)=>{
  const valorFormatado = mascaraDePreco(String(valor))
  return(
    <li>
      <p>{nome}</p>
      <p>{`R$${valorFormatado}`}</p>
    </li>
  )
}
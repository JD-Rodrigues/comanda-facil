import { mascaraDePreco } from "../../services"
import { ICardProdutoEstoqueProps } from "../../types"

export const CardProdutoEstoque = ({nome, valor}:ICardProdutoEstoqueProps)=>{
  const valorFormatado = mascaraDePreco(String(valor))
  return(
    <li>
      <p>{nome}</p>
      <p>{`R$${valorFormatado}`}</p>
    </li>
  )
}
import { mascaraDePreco } from "../../services"
import { ICardProdutoMenuProps } from "../../types"

export const CardProdutoMenu = ({nome, valor}:ICardProdutoMenuProps)=>{
  const valorFormatado = mascaraDePreco(String(valor))
  return(
    <div>
      <p>{nome}</p>
      <p>{`R$${valorFormatado}`}</p>
    </div>
  )
}
import { mascaraDePreco } from "../../services"
import { ICardProdutoProps } from "../../types"

export const CardProduto = ({nome, valor, setProdutoSelecionado}:ICardProdutoProps)=>{
  const valorFormatado = mascaraDePreco(String(valor))
  return(
    <li onClick={()=>setProdutoSelecionado(nome)}>
      <p>{nome}</p>
      <p>{`R$${valorFormatado}`}</p>
    </li>
  )
}
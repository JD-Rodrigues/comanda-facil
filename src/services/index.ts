import React from "react"
import { IComanda, IProduto, IProdutoConsumido, TArrayParaChecagemDeItensRepetidos, TDadosParaLocalStorage } from "../types"

const salvarDados = (itemName:string, dados:TDadosParaLocalStorage) => {
  localStorage.setItem(itemName, JSON.stringify(dados))
}

const carregarDados = (itemName:string) => {
  const dados = localStorage.getItem(itemName)

  return dados ? JSON.parse(dados) : []
}

function validacaoDePreco(price:string) {
  let validPrice = price.replace(/[^'0''1''2''3''4''5''6''7''8''9']/g, '')
  return validPrice
}

function mascaraDePreco(value:string) {
  if(value.length>2) {
      let formattedValue = [value.slice(0, value.length-2), ",", value.slice(value.length-2)].join("");

      if(formattedValue.length > 4 && formattedValue[0] === "0") {
          formattedValue = formattedValue.slice(1)
      }

      let count = (formattedValue.length-3)-3;

      for(let i = formattedValue.length-3; i>0;i--) {
          if(i === count) {
              formattedValue = [formattedValue.slice(0,count),".",formattedValue.slice(count)].join("");
              count = count - 3;
          }
      }

      return formattedValue;
  }else if (value.length === 1){
      return ['0', `0${value}`]
  }else {
      return ['0', value];
  }
}

const checarItemRepetido = (nomeDoItem:string, array:TArrayParaChecagemDeItensRepetidos) => {
    

  let resultado = false

  array && array.forEach((item:IComanda | IProduto) => {
    if(item.nome === nomeDoItem) {
      resultado = true
    }
  } )

  return resultado

}

const adicionarComanda = (nomeDaComanda:string, setComandas:React.Dispatch<React.SetStateAction<IComanda[] | null>>) => {
  const listaDeComandas = carregarDados("comandas")
  listaDeComandas.push(
    {
      nome: nomeDaComanda,
      aberta:true,
      consumo: []
    }
  )
  setComandas(listaDeComandas)
}

const fecharComanda = (nomeDaComanda:string) => {
  const comandas = carregarDados("comandas")
  comandas.forEach((comanda:IComanda)=>  {
    if(comanda.nome === nomeDaComanda){
      comanda.aberta = false
    }
})

  return comandas

}

const cadastrarProduto = (nome:string, valor:string, setProdutos: React.Dispatch<React.SetStateAction<IProduto[] | null>>) => {
  const listaDeProdutos = carregarDados("produtos")
  listaDeProdutos.push(
    {
      nome: nome,
      valorUnit:Number(validacaoDePreco(valor))
    }
  )

  setProdutos(listaDeProdutos)
}

function adicionarProdutoAComanda(comanda:IComanda, produto:IProduto){
  console.log(comanda.nome)
  
    comanda.consumo && comanda.consumo.push(
      {
        nome:produto.nome,
        valorUnit:produto.valorUnit,
        quantidade:1
      }
    )  
}

function incrementarQuantidade(comanda:IComanda, nomeDoProduto:string){
  comanda.consumo && comanda.consumo.forEach((item:IProdutoConsumido)=> item.nome === nomeDoProduto && item.quantidade ++)
}

function atualizarComanda(nomeDaComanda:string, nomeDoProduto:string, setComandas:React.Dispatch<React.SetStateAction<IComanda[] | null>>){
  const comandas = carregarDados("comandas")
  const estoque = carregarDados("produtos")
  const [comandaEscolhida] = comandas.filter((comanda:IComanda)=>comanda.nome === nomeDaComanda)
  const [produtoEscolhido] = estoque.filter((produto:IProduto)=> produto.nome === nomeDoProduto)


  if (checarItemRepetido(nomeDoProduto, comandaEscolhida.consumo)){
    incrementarQuantidade(comandaEscolhida, nomeDoProduto)
  } else {
    adicionarProdutoAComanda(comandaEscolhida, produtoEscolhido)
  }

  comandas.map((comanda:IComanda)=> comanda.nome === comandaEscolhida.nome && comandaEscolhida)

  setComandas(comandas)

}

function calcularTotalGastoEmComanda(comanda:IComanda) {
  const total = comanda.consumo && comanda.consumo.reduce((acc, item) =>  acc + item.quantidade * item.valorUnit,0)

  return total
}




export {salvarDados,carregarDados, adicionarComanda, cadastrarProduto, validacaoDePreco, mascaraDePreco, checarItemRepetido, atualizarComanda, calcularTotalGastoEmComanda, fecharComanda}
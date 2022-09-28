import { TDadosParaLocalStorage } from "../types"

export const salvaDados = (itemName:string, dados:TDadosParaLocalStorage) => {
  localStorage.setItem(itemName, JSON.stringify(dados))
}

export const carregaDados = (itemName:string) => {
  const dados = localStorage.getItem(itemName)

  return dados ? JSON.parse(dados) : []
}
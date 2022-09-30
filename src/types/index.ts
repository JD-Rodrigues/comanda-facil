import React from "react";
import { JsxElement } from "typescript";

interface IProduto {
  nome: string;
  valorUnit: number;
}

interface IProdutoConsumido {
  nome: string;
  valorUnit: number;
  quantidade: number;
}

interface IComanda {
  nome: string;
  consumo: IProdutoConsumido[]
}

interface IModalProps {
  nomeDoModal: string;
  children: React.ReactNode;
  toggle: boolean
}

interface IListaDeComandasProps {
  comandas: IComanda[] | null;
  setComandas: React.Dispatch<React.SetStateAction<IComanda[] | null>>
  setComandaSelecionada: React.Dispatch<React.SetStateAction<string>>
}

interface IComandaProps {
  comandaSelecionada: string
}

interface IListaDeProdutosProps {
  produtos: IProduto[] | null;
  setProdutos: React.Dispatch<React.SetStateAction<IProduto[] | null>>
}

interface ICardComandaProps {
  nomeDaComanda: string;
  soma: number;
  setComandaSelecionada: React.Dispatch<React.SetStateAction<string>>
}

interface ICardProdutoProps{
  nome:string;
  valor:number;
}


type TDadosParaLocalStorage = IProduto[] | IComanda[]

export type {IProduto, IProdutoConsumido, IComanda, TDadosParaLocalStorage, IModalProps, IListaDeComandasProps, IListaDeProdutosProps, ICardComandaProps, ICardProdutoProps, IComandaProps}
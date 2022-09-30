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
  consumo: IProdutoConsumido[] | null
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
  comandaSelecionada: string
}

interface ICardComandaProps {
  nomeDaComanda: string;
  soma: number | null;
  setComandaSelecionada: React.Dispatch<React.SetStateAction<string>>
}

interface ICardProdutoProps{
  nome:string;
  valor:number;
  setProdutoSelecionado: React.Dispatch<React.SetStateAction<string | null>>
}


type TDadosParaLocalStorage = IProduto[] | IComanda[]

type TArrayParaChecagemDeItensRepetidos = IComanda[] | IProduto[] | IProdutoConsumido[] |null

export type {IProduto, IProdutoConsumido, IComanda, TDadosParaLocalStorage, IModalProps, IListaDeComandasProps, IListaDeProdutosProps, ICardComandaProps, ICardProdutoProps, IComandaProps, TArrayParaChecagemDeItensRepetidos}
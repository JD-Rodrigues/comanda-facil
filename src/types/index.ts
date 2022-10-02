import React from "react";

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
  aberta:boolean;
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

interface IComandasFechadasProps {
  comandas: IComanda[] | null;
  setComandaSelecionada: React.Dispatch<React.SetStateAction<string>>
}

interface IComandaProps {
  comandaSelecionada: string
}

interface IEstoqueDeProdutosProps {
  produtos: IProduto[] | null;
  setProdutos: React.Dispatch<React.SetStateAction<IProduto[] | null>>
}

interface ICardapioProps {
  produtos: IProduto[] | null;
  comandaSelecionada:string;
  setComandas: React.Dispatch<React.SetStateAction<IComanda[] | null>>
}

interface ICardComandaProps {
  nomeDaComanda: string;
  soma: number | null;
  setComandaSelecionada: React.Dispatch<React.SetStateAction<string>>
}

interface ICardProdutoEstoqueProps{
  nome:string;
  valor:number;  
}

interface ICardProdutoMenuProps{
  nome:string;
  valor:number;
}

interface ICardProdutoDaComandaProps{
  produto: IProdutoConsumido
}


type TDadosParaLocalStorage = IProduto[] | IComanda[]

type TArrayParaChecagemDeItensRepetidos = IComanda[] | IProduto[] | IProdutoConsumido[] |null

export type {IProduto, IProdutoConsumido, IComanda, TDadosParaLocalStorage, IModalProps, IListaDeComandasProps, IEstoqueDeProdutosProps, ICardapioProps, ICardComandaProps, ICardProdutoEstoqueProps, ICardProdutoMenuProps, IComandaProps, TArrayParaChecagemDeItensRepetidos, ICardProdutoDaComandaProps, IComandasFechadasProps}
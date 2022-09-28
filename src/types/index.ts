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
  name: string;
  consumo: IProdutoConsumido[]
}

interface IModalProps {
  nomeDoModal: string;
  children: React.ReactNode;
  toggle: boolean
}

type TDadosParaLocalStorage = IProduto[] | IComanda[]

export type {IProduto, IProdutoConsumido, IComanda, TDadosParaLocalStorage, IModalProps}
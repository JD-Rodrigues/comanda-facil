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

type TDadosParaLocalStorage = IProduto[] | IComanda[]

export type {IProduto, IProdutoConsumido, IComanda, TDadosParaLocalStorage}
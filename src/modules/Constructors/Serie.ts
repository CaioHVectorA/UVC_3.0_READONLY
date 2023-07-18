import { Capitulo } from "../types/Serie";
export class Episodios {
  Nome: string;
  Ref: string;
  Numero: number;

  constructor(nome: string, ref: string, numero: number) {
    this.Nome = nome;
    this.Ref = ref;
    this.Numero = numero;
  }
}

export class C_Capitulo {
  Nome: string;
  Disponivel: boolean;
  NumEps: number;
  DescCap: string;
  Episodios: Episodios[];

  constructor(
    nome: string,
    disponivel: boolean,
    numEps: number,
    descCap: string,
    episodios: Episodios[]
  ) {
    this.Nome = nome;
    this.Disponivel = disponivel;
    this.NumEps = numEps;
    this.DescCap = descCap;
    this.Episodios = episodios;
  }
}
export default class Serie {
  Nome: string;
  SubNome: string;
  Descricao: string;
  Escrito: string;
  Ref: string;
  Data: string | Date;
  Status: string;
  Categorias: string[];
  Relacionados: object[];
  Capitulos: Capitulo[];
  Tipo: string;
  ImgRef: string;
  Keywords: string[];
  constructor(
    Nome: string,
    SubNome: string,
    Descricao: string,
    Escrito: string,
    Ref: string,
    Data: string | Date,
    Status: string,
    Categorias: string[],
    Relacionados: object[],
    Capitulos: Capitulo[],
    ImgRef: string,
    Keywords: string[]
  ) {
    this.Nome = Nome;
    this.SubNome = SubNome;
    this.Descricao = Descricao;
    this.Escrito = Escrito;
    this.Ref = Ref;
    this.Data = Data;
    this.Status = Status;
    this.Categorias = Categorias;
    this.Relacionados = Relacionados;
    this.Capitulos = Capitulos;
    this.Tipo = "SERIE";
    this.ImgRef = ImgRef;
    this.Keywords = Keywords
  }
}

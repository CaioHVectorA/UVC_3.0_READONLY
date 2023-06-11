import { Capitulo } from "../types/Serie";

export default class Serie {
  Nome: string;
  Descricao: string;
  Escrito: string;
  Ref: string;
  Data: string | Date;
  Status: string;
  Categorias: string[];
  Relacionados: object[];
  Capitulos: Capitulo[];
  Tipo: string;
  constructor(
    Nome: string,
    Descricao: string,
    Escrito: string,
    Ref: string,
    Data: string | Date,
    Status: string,
    Categorias: string[],
    Relacionados: object[],
    Capitulos: Capitulo[]
  ) {
    this.Nome = Nome;
    this.Descricao = Descricao;
    this.Escrito = Escrito;
    this.Ref = Ref;
    this.Data = Data;
    this.Status = Status;
    this.Categorias = Categorias;
    this.Relacionados = Relacionados;
    this.Capitulos = Capitulos;
    this.Tipo = "SERIE";
  }
}

export default class Solo {
  Nome: string;
  SubNome: string;
  Descricao: string;
  Escrito: string;
  Ref: string;
  Data: string | Date;
  Status: string;
  ImgRef: string;
  Categorias: string[];
  Relacionados: object[];
  isAlternative: boolean;
  Tipo: string;
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
    ImgRef: string,
    isAlternative: boolean,
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
    this.isAlternative = isAlternative;
    this.ImgRef = ImgRef;
    this.Tipo = "SOLO";
    this.Keywords = Keywords
  }
}

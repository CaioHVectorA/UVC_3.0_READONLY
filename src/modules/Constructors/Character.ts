type Aparicoes_Type = {
  Ref: string;
  Nome: string;
  Img: string;
};

type Citacao = {
  Frase: string;
  Autor?: string;
};
type Atributos = {
  Forca: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  Agilidade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  Resistencia: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  Inteligencia: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export default class Character {
  Nome: string;
  Apelido: string;
  Imgs: string[];
  Citacoes: Citacao[];
  Atributos: Atributos;
  Aparicoes: Aparicoes_Type[];
  Biografia: string;
  Poderes: string;
  Curiosidades: string | undefined;
  Color: string;
  isHero: boolean;
  Equipe: string | undefined;
  Local: string;
  constructor(
    Nome: string,
    Apelido: string,
    Imgs: string[],
    Citacoes: Citacao[],
    Atributos: Atributos,
    Aparicoes: Aparicoes_Type[],
    Biografia: string,
    Poderes: string,
    Curiosidades: string,
    Color: string,
    isHero: boolean,
    Equipe: string,
    Local: string
  ) {
    this.Nome = Nome;
    this.Apelido = Apelido;
    this.Imgs = Imgs;
    this.Citacoes = Citacoes;
    this.Atributos = Atributos;
    this.Aparicoes = Aparicoes;
    this.Biografia = Biografia;
    this.Poderes = Poderes;
    this.Curiosidades = Curiosidades;
    this.Color = Color;
    this.isHero = isHero;
    this.Equipe = Equipe;
    this.Local = Local;
  }
}

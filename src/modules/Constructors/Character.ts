import { Character_Type } from "../types/Character";
type Aparicoes_Type = {
  Ref: string;
  Nome: string;
  Img: string;
};

export default class Character {
  Nome: string;
  Apelido: string;
  Imgs: string[];
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

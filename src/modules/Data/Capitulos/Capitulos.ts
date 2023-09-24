import { C_Capitulo, Episodios } from "../../Constructors/Serie";
import { Capitulo } from "../../types/Serie";

export const capitulosRRH: Capitulo[] = [
  {
    Nome: "Primeiros Passos",
    Disponivel: true,
    NumEps: 5,
    DescCap: "Descricao de capítulo aqui",
    Episodios: [
      new Episodios("A reunião", "01", 1),
      new Episodios("Reconhecimento", "02", 2),
      // new Episodios("Invasões", "03", 3),
      // new Episodios("Brechas do passado", "04", 4),
      // new Episodios("Veredicto", "05", 5),
    ],
  },
  {
    Nome: "Diplomacia Falsa",
    Disponivel: false,
    NumEps: 4,
    DescCap: "Descricao de capítulo aqui",
    Episodios: [
      new Episodios("Novos Conflitos", "06", 6),
      new Episodios("Ao Roubo", "07", 7),
      new Episodios("Ilusões", "08", 8),
      new Episodios("A expedição", "09", 9),
    ],
  },
  {
    Nome: "Mudanças drásticas",
    Disponivel: false,
    NumEps: 4,
    DescCap: "Descricao de capítulo aqui",
    Episodios: [
      new Episodios("Surpresas", "10", 10),
      new Episodios("Virando o jogo", "11", 11),
      new Episodios("Extorsão", "12", 12),
      new Episodios("Recompensados", "13", 13),
    ],
  },
  {
    Nome: "Ressurreição",
    Disponivel: false,
    NumEps: 5,
    DescCap: "Descricao de capítulo aqui",
    Episodios: [
      new Episodios("Férias Interrompidas", "14", 14),
      new Episodios("Conflitos Internos", "15", 15),
      new Episodios("De dentro pra fora", "16", 16),
      new Episodios("Implosões e explosões", "17", 17),
      new Episodios("Expansão", "18", 18),
    ],
  },
  {
    Nome: "Expansão",
    Disponivel: false,
    NumEps: 4,
    DescCap: "Descricao de capítulo aqui",
    Episodios: [
      new Episodios("Resistência", "19", 19),
      new Episodios("Tensões", "20", 20),
      new Episodios("Distrações", "21", 21),
      new Episodios("Proximidade", "22", 22),
    ],
  },
  {
    Nome: "A Guerra",
    Disponivel: false,
    NumEps: 4,
    DescCap: "Descricao de capítulo aqui",
    Episodios: [
      new Episodios("Fogo intermitente", "23", 23),
      new Episodios("Sombras de poder", "24", 24),
      new Episodios("Permeando o impermeável", "25", 25),
    ],
  },
];

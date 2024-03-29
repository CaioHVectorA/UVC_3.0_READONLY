import { IMGS, RELACIONADOS } from "../../utilities/consts";
import Serie, { C_Capitulo, Episodios } from "../Constructors/Serie";
import { capitulosRRH } from "./Capitulos/Capitulos";

const Series: Serie[] = [
  // RRH / MR1 / GUARD / CONG / MR2?
  new Serie(
    "Red Right Hand",
    "RRH",
    "Acompanhe a história de uma equipe formado por poderosos que controla Severum e tem como um dos seus objetivos a dominância perante todo o universo,seja em poder aquisitivo ou poder de combate.",
    "CAIO HENRIQUE",
    "SE_RRH",
    new Date(),
    "COMPLETO",
    ["Ação", "Drama", "Gestão", "Sci-Fi"],
    [RELACIONADOS.CONGREGADORES],
    capitulosRRH,
    IMGS.RRH,
    ["Arner", "Guerra", "Masin", "Yaa", "Tsuuya", "RRH", "Delimitador", "Fingers", "Tarlin", "Mão", "Right", "Hand", "Guerras", "Diplomacia", "Primeiros passos", "Severum", "Universal", "Espaço", "Andromeda", "Andrômeda"]
  ),
  new Serie(
    "Menino Resiliente I",
    "MR I",
    "Larry,um menino tranquilo se envolve em acidentes e ocorre atrocidades em sua vida.Porém,em meio a tristeza e a perdição,ele percebe que ele tem um poder incomum.",
    "CAIO HENRIQUE",
    "SE_MR1",
    new Date(),
    "COMPLETO",
    ["Ação", "Drama", "Teen"],
    [RELACIONADOS.GUARDIOES, RELACIONADOS.MR_2],
    [
      // CAPITULOS MR 1 AQUI
    ],
    IMGS.MR_1,
    ["Larry", "Beatus", "Guardiões", "Guardioes", "Terra", "Herói", "Susbituto", "Guardião"]
  ),
  new Serie(
    "Guardiões",
    "Guard.",
    "Beenie se muda da cidade com seus pais em busca de uma vida melhor e um futuro promissor. Porém nessa cidade,há coisas que eles nunca imaginariam que teriam que enfrentar.",
    "CAIO HENRIQUE",
    "SE_GUA",
    new Date(),
    "EM ANDAMENTO",
    ["Ação", "Drama"],
    [RELACIONADOS.HADES, RELACIONADOS.KERRY],
    [
      // CAPITUOS GUARDIÕES AQUI
    ],
    IMGS.GUARDIOES,
    ["Beenie", "Kevin", "Telecinese", "Escuridon", "Guardião", "Terra", "Herói", "Heróis"]
  ),
  new Serie(
    "Congregadores",
    "Cong.",
    "Ciecon, depois de derrotar Hades, marcha em busca de aliados para conseguir a tão sonhada Justiça Universal",
    "CAIO HENRIQUE",
    "SE_CONG",
    new Date(),
    "COMPLETO",
    ["Sci-Fi", "Ação", "Drama", "Gestão"],
    [RELACIONADOS.PUNHO_MORTAL, RELACIONADOS.CIECON],
    [
      // CAPITULOS CONGREGADORES AQUI
    ],
    IMGS.CONGREGADORES,
    ["Espaço", "Ciecon", "Punho Mortal", "Rex", "Justiça", "Paz", "Liberdade", "Hades"],
  ),
];

export default Series;

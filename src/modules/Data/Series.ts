import { RELACIONADOS } from "../../utilities/consts";
import Serie from "../Constructors/Serie";

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
    [
      //  CAPITULOS RRH AQUI
    ]
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
    ]
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
    ]
  ),
  new Serie(
    "Congregadores",
    "Cong.",
    "Ciecon, depois de derrotar Hades, marcha em busca de aliados para conseguir a tão sonhada Justiça Universal",
    "CAIO HENRIQUE",
    "SE_CONG",
    new Data(),
    "COMPLETO",
    ["Sci-Fi", "Ação", "Drama", "Gestão"],
    [RELACIONADOS.PUNHO_MORTAL, RELACIONADOS.CIECON],
    [
      // CAPITULOS CONGREGADORES AQUI
    ]
  ),
];

export default Series;

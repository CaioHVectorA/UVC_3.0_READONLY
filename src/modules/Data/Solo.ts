import { IMGS, RELACIONADOS } from "../../utilities/consts";
import Solo from "../Constructors/Solo";
// | HADES | CIECON | KERRY | PUNHO MORTAL | O GLACIAL FIM DO MUNDO | BYTES INVADEM TERRA?
const DataSolos: Solo[] = [
  new Solo(
    "Hades",
    "",
    "Entenda a mente do homem de origem divina que tem um desejo incensável de mais poder. Ele não vai parar enquanto não tiver o que quer.",
    "Caio Henrique",
    "S_HAD",
    new Date(),
    "COMPLETO",
    ["Ação", "Universal", "Sci-Fi"],
    [RELACIONADOS.CIECON, RELACIONADOS.GUARDIOES],
    IMGS.HADES,
    false,
    ["Demônio", "Tirano", "Deus", "Mal"]
  ),
  new Solo(
    "Ciecon",
    "O Justiceiro Espacial",
    "Ciecon tinha uma vida pacata e tranquila, junto a sua família que tanto ama. Porém, de repente, sua vida muda de uma forma repentina.",
    "CAIO HENRIQUE",
    "S_CIEC",
    new Date(),
    "COMPLETO",
    ["Sci-Fi", "Universal", "Ação", "Drama"],
    [RELACIONADOS.CONGREGADORES, RELACIONADOS.HADES],
    IMGS.CIECON,
    false,
    ["Congregadores", "Congregador", "Herói", "Justiça", "Justiceiro", "Espaço", "Galáxia"]
  ),
  new Solo(
    "Kerry",
    "O Guerreiro da Vingança",
    "A vida de Kerry foi destruída e ele foi descartado como lixo. Mas quando ele se levanta, seu único desejo é a vingança",
    "CAIO HENRIQUE",
    "S_KER",
    new Date(),
    "COMPLETO",
    ["Drama", "Ação", "Violência"],
    [RELACIONADOS.GUARDIOES],
    IMGS.KERRY,
    false,
    ["Aço", "O homem de aço", "Forte", "de ferro", "Vingança"]
  ),
  new Solo(
    "Punho Mortal",
    "",
    "Conheça a história de Naok",
    "Entenda a origem dos Aedificantes, e como eles resistiram a soberania da Red Right Hand.",
    "S_PM",
    new Date(),
    "COMPLETO",
    ["Drama", "Ação", "Violência", "Sci-Fi"],
    [RELACIONADOS.CONGREGADORES],
    IMGS.PUNHO_MORTAL,
    false,
    ["Soco", "Murro", "Naok", "Congregadores", "Congregador"]
  ),
  new Solo(
    "O Glacial Fim do Mundo",
    "",
    "Cole Froz, um dos herdeiros do trono de Gelo, chega a terra e descobre que deve destruí-la.",
    "CAIO HENRIQUE",
    "S_GFDM",
    new Date(),
    "COMPLETO",
    ["Drama", "Ação", "Sci-Fi"],
    [RELACIONADOS.GUARDIOES],
    IMGS.GLACIAL,
    true,
    ["Desastre", "Catástrofe", "Apocalipse", "Froz", "Reino Froz"]
  ),
];

export default DataSolos;

import { IMGS, RELACIONADOS } from "../../utilities/consts";
import Character from "../Constructors/Character";

const Chars: Character[] = [
  // Primários
  // Terra Heros Line I - BEENIE | KERRY | LARRY | ALERO | INERA
  // Terra vilões Line I - KEVIN, COLE FROZ, HADES, POTINFLA...
  // Terra vilões Line II - Ninja | - E OUTROS
  // Universal Heros Line I - CIECON | -- E OS OUTROS, DPS
  // Universal RRH Line - ARNER | DEROO DA | DELIMITADOR | TARLIN | IRMÃOS
  new Character(
    "Beenie",
    "O Telecinese",
    [IMGS.GUARDIOES],
    [{ Frase: "O psicológico comando o corpo, e o espírito conduz tudo." }],
    { Forca: 7, Agilidade: 6, Resistencia: 5, Inteligencia: 8 },
    [RELACIONADOS.GUARDIOES]
  ),
];

export default Chars;

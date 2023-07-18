import { IMGS, RELACIONADOS } from "../../../utilities/consts";
import Character from "../../Constructors/Character";
import { BIOGRAFIA } from "./TextosCharacters/Biografias";
import { PODERES } from "./TextosCharacters/Poderes";

export const HerosLineI: Character[] = [
  new Character(
    "Beenie",
    "O Telecinese",
    [IMGS.GUARDIOES],
    [{ Frase: "O psicológico comando o corpo, e o espírito conduz tudo." }],
    { Forca: 7, Agilidade: 6, Resistencia: 5, Inteligencia: 8 },
    [RELACIONADOS.GUARDIOES],
    BIOGRAFIA.beenie,
    PODERES.beenie,
    "Beenie foi o primeiro Guardião. Além disso, seu Nome sofreu várias mudanças. Ele já foi Alex, Divocu, e muito mais!",
    "#b140a6",
    true,
    "GUARDIÕES",
    "TERRA",
    ["Guardiões", "Guardião", "Telecinese", "Psíquico"]
  ),
];

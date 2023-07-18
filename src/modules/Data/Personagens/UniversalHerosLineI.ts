import { IMGS, RELACIONADOS } from "../../../utilities/consts";
import Character from "../../Constructors/Character";
import { BIOGRAFIA } from "./TextosCharacters/Biografias";
import { PODERES } from "./TextosCharacters/Poderes";

export const Univ_Hero_LINEI: Character[] = [
    new Character(
        'Ciecon',
        'O Justiceiro Espacial',
        [IMGS.CIECON, IMGS.CONGREGADORES],
        [{ Frase: 'Vou fazer eles serem atingidos com a própria bala... Literalmente.' }, { Frase: 'A maioria das pessoas nunca entenderão a dor de ver seu povo dizimado diante de seus próprios olhos... E nem devem. É para isso que eu luto.' }],
        { Agilidade: 4, Forca: 8, Inteligencia: 9, Resistencia: 5 },
        [RELACIONADOS.CONGREGADORES, RELACIONADOS.CIECON, RELACIONADOS.RRH],
        BIOGRAFIA.ciecon,
        PODERES.ciecon,
        '',
        '#237c99',
        true,
        'Congregadores',
        'UNIVERSAL',
        ["Congregador", "Justiça", "Justiceiro"]
    )
]
import { IMGS, RELACIONADOS } from "../../../utilities/consts";
import Character from "../../Constructors/Character";
import { BIOGRAFIA } from "./TextosCharacters/Biografias";
import { PODERES } from "./TextosCharacters/Poderes";

export const HadesLineI: Character[] = [
    new Character(
    'Hades',
    'O Demônio',
    [IMGS.HADES],
    [{Frase: 'Depois de dominar essas almas condenadas, eu irei dominar o mundo imortal. Aquele covarde não me escapará denovo!'}],
    {Agilidade: 8, Forca: 10, Resistencia: 10, Inteligencia: 6},
    [RELACIONADOS.GUARDIOES,RELACIONADOS.CIECON,RELACIONADOS.HADES],
    BIOGRAFIA.hades,
    PODERES.hades,
    '',
    '#e33b29',
    false,
    '',
    'UNIVERSAL'
    ),
    new Character(
        'Ormuz',
        '',
        [],
        [],
        {Agilidade: 10, Forca: 8, Resistencia: 10, Inteligencia: 9},
        [RELACIONADOS.HADES],
        BIOGRAFIA.ormuz,
        PODERES.ormuz,
        '',
        '#080808',
        false,
        '',
        'UNIVERSAL',
    )
]
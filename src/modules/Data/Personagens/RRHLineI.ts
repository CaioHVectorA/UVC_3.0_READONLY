import { IMGS, RELACIONADOS } from "../../../utilities/consts";
import Character from "../../Constructors/Character";
import { BIOGRAFIA } from "./TextosCharacters/Biografias";
import { PODERES } from "./TextosCharacters/Poderes";


export const RRHLineI: Character[] = [
    new Character(
        'Arner',
        'O Líder de Severum',
        [IMGS.RRH],
        [
        {Frase: 'O que tiver preço, nós compramos… O que tiver valor, conquistamos.'},
        {Frase: "Lembre-se: A Red Right Hand dominará, crescerá, prevalecerá e, acima de tudo, florescerá."}
    ],
    {Agilidade: 1,Forca: 2,Inteligencia: 9,Resistencia: 4},
    [RELACIONADOS.CONGREGADORES,RELACIONADOS.RRH],
    BIOGRAFIA.arner,
    PODERES.arner,
    '',
    '#710202',
    false,
    'Red Right Hand',
    'UNIVERSAL'
    ),
    new Character(
        'Delimitador',
        'O Tirano',
        [IMGS.RRH],
        [{Frase: 'Um homem é definido pela sua força...'},{Frase: 'Por que Delimitador? Porque ele quebra limites, oras.',Autor: 'um soldado de Mizóide'}],
        {Forca: 9,Agilidade: 4,Resistencia: 8,Inteligencia: 2},
        [RELACIONADOS.RRH,RELACIONADOS.PUNHO_MORTAL],
        BIOGRAFIA.delimitador,
        PODERES.delimitador,
        '',
        '#710202',
        false,
        'Red Right Hand',
        'UNIVERSAL'
    ),
    new Character(
        'Tarlin',
        'Olhos de águia',
        [IMGS.RRH],
        [{Frase: 'As vezes, apertar o gatilho parece tão simples quando dar um passo.'}],
        {Forca: 8,Resistencia: 5,Agilidade: 4,Inteligencia: 7},
        [RELACIONADOS.RRH],
        BIOGRAFIA.tarlin,
        PODERES.tarlin,
        '',
        '#710202',
        false,
        'Red Right Hand',
        'UNIVERSAL'
    )

]
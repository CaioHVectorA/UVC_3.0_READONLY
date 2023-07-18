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
            { Frase: 'O que tiver preço, nós compramos… O que tiver valor, conquistamos.' },
            { Frase: "Lembre-se: A Red Right Hand dominará, crescerá, prevalecerá e, acima de tudo, florescerá." }
        ],
        { Agilidade: 1, Forca: 2, Inteligencia: 9, Resistencia: 4 },
        [RELACIONADOS.CONGREGADORES, RELACIONADOS.RRH],
        BIOGRAFIA.arner,
        PODERES.arner,
        '',
        '#710202',
        false,
        'Red Right Hand',
        'UNIVERSAL',
        ["Red Right Hand", "RRH", "Severum", "Líder"]
    ),
    new Character(
        'Delimitador',
        'O Tirano',
        [IMGS.RRH],
        [{ Frase: 'Um homem é definido pela sua força...' }, { Frase: 'Por que Delimitador? Porque ele quebra limites, oras.', Autor: 'um soldado de Mizóide' }],
        { Forca: 9, Agilidade: 4, Resistencia: 8, Inteligencia: 2 },
        [RELACIONADOS.RRH, RELACIONADOS.PUNHO_MORTAL],
        BIOGRAFIA.delimitador,
        PODERES.delimitador,
        '',
        '#710202',
        false,
        'Red Right Hand',
        'UNIVERSAL',
        ["Red Right Hand", "RRH", "Severum", "Tirano"]
    ),
    new Character(
        'Tarlin',
        'Olhos de águia',
        [IMGS.RRH],
        [{ Frase: 'As vezes, apertar o gatilho parece tão simples quando dar um passo.' }],
        { Forca: 8, Resistencia: 5, Agilidade: 4, Inteligencia: 7 },
        [RELACIONADOS.RRH],
        BIOGRAFIA.tarlin,
        PODERES.tarlin,
        '',
        '#710202',
        false,
        'Red Right Hand',
        'UNIVERSAL',
        ["Red Right Hand", "RRH", "Severum", "Atirador"]
    ),
    new Character(
        'Deroo Da',
        'A mente brilhate',
        [IMGS.RRH],
        [{ Frase: 'Vocês não sabem o que é guerra... Ainda', Autor: 'Deroo, enquanto vê os irmãos Yaa se distanciando.' }, { Frase: 'Ética? Se tem uma coisa que eu não quero aprender, é ética...' }],
        { Agilidade: 2, Forca: 4, Inteligencia: 10, Resistencia: 5 },
        [RELACIONADOS.RRH, RELACIONADOS.CONGREGADORES],
        BIOGRAFIA.derooda,
        PODERES.derooda,
        '',
        '#4c99e6',
        false,
        'Red Right Hand',
        'UNIVERSAL',
        ["Red Right Hand", "RRH", "Severum", "DD", "Gênio", "Cientista"]
    ),
    new Character(
        'Irmãos Yaa',
        'Meticulosamente Ardilosos',
        [IMGS.RRH],
        [{ Frase: 'Eles... Eles tem um potencial Absurdo. Eles são como uma terra prestes a florir', Autor: 'Arner, quando questionado sobre os irmãos por Deroo.' }],
        { Forca: 7, Agilidade: 10, Resistencia: 4, Inteligencia: 6 },
        [RELACIONADOS.RRH],
        BIOGRAFIA.irmaosyaa,
        PODERES.irmaos,
        '',
        '#710202',
        false,
        'Red Right Hand',
        'UNIVERSAL',
        ["Red Right Hand", "RRH", "Severum", "Intocáveis"]
    )

]
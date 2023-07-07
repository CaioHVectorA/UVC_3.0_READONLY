import { IMGS, RELACIONADOS } from "../../utilities/consts";
import Character from "../Constructors/Character";
import { HadesLineI } from "./Personagens/HadesLineI";
import { HerosLineI } from "./Personagens/HerosLineI";
import { RRHLineI } from "./Personagens/RRHLineI";
import { Univ_Hero_LINEI } from "./Personagens/UniversalHerosLineI";
const Chars: Character[] = [
  ...HerosLineI,
  ...RRHLineI,
  ...HadesLineI,
  ...Univ_Hero_LINEI
  // Primários
  // Terra Heros Line I - BEENIE | KERRY | LARRY | ALERO | INERA
  // Terra vilões Line I - KEVIN, COLE FROZ, HADES, POTINFLA...
  // Terra vilões Line II - Ninja | - E OUTROS
  // Universal Heros Line I - CIECON | -- E OS OUTROS, DPS
  // Universal RRH Line I - ARNER | DEROO DA | DELIMITADOR | TARLIN | IRMÃOS
  // Universal RRH Line II - Lamproy, Firn, economistas...
];

export default Chars;

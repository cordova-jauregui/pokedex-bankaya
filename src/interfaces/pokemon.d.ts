interface iPokemonInList {
  name: string;
  url: string;
}
interface iPokemon {
  abilities?: { ability: nameAndUrl }[];
  base_experience: number;
  height: number;
  id: number;
  moves?: { move: nameAndUrl }[];
  name: string;
  order: number;
  url: string;
  types?: { type: nameAndUrl }[];
  weight: number;
}
interface nameAndUrl {
  name: string;
  url: string;
}

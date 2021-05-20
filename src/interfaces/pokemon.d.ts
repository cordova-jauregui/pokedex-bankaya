interface iPokemonInList {
  name: string;
  url: string;
}
interface iPokemonType {
  type: nameAndUrl;
}
interface iPokemonStat {
  base_stat: number;
  effort: number;
  stat: nameAndUrl;
}
interface iPokemonMove {
  move: nameAndUrl;
}
interface iPokemonAbility {
  ability: nameAndUrl;
}
interface iPokemon {
  abilities: iPokemonAbility[];
  base_experience: number;
  height: number;
  id: number;
  moves: iPokemonMove[];
  stats: iPokemonStat[];
  name: string;
  order: number;
  url: string;
  types: iPokemonType[];
  weight: number;
}
interface nameAndUrl {
  name: string;
  url: string;
}

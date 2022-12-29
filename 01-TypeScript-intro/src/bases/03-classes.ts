import axios from 'axios';

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ) { }

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves() {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
    console.log( data.moves );

    return data.moves;
  }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();

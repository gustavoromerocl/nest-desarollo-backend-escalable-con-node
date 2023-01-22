import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
// import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    // @InjectModel(Pokemon.name)
    // private readonly pokemonModel: Model<Pokemon>
    private readonly pokemonService: PokemonService,
  ) { }

  
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')
    
    data.results.forEach(async ({ name, url }) => {

      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ];
      const pokemon = await this.pokemonService.create({name, no});
    });

    return 'Seed executed'
  }
}

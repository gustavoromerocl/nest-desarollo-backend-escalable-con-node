import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
// import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
// import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    // private readonly pokemonService: PokemonService,
  ) { }

  
  async executeSeed() {
    await this.pokemonModel.deleteMany({}); //delete * from pokemon
    
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
    
    //Insertar multiples registros simultaneamente

    //Forma 1
    const pokemonToInsert: {name: string, no: number}[] = [];
    
    data.results.forEach(({ name, url }) => {

      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ];
      // const pokemon = await this.pokemonService.create({name, no});
      pokemonToInsert.push({name, no});
    });

    this.pokemonModel.insertMany(pokemonToInsert);
    
    //Forma 2

    // const insertPromisesArray = [];
    
    // data.results.forEach(({ name, url }) => {

    //   const segments = url.split('/');
    //   const no = +segments[ segments.length - 2 ];
    //   // const pokemon = await this.pokemonService.create({name, no});
    //   insertPromisesArray.push(this.pokemonService.create({name, no}));
    // });


    // await Promise.all( insertPromisesArray );
    
    

    return 'Seed executed'
  }
}

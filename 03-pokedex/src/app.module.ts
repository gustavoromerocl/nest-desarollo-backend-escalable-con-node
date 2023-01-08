import { join } from 'path'; // Paquetes propios de Node al inicio
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    PokemonModule
  ],
})
export class AppModule {}

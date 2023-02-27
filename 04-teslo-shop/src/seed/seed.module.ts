import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ProductsModule,
    //Al importar el modulo completo, se importan todos los imports que este posee, en este caso las dependencias nececsarias para ejecutar el sistema de autorizacion
    AuthModule
  ]
})
export class SeedModule {}

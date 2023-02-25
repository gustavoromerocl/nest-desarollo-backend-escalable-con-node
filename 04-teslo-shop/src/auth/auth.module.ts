import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([
      User,
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: {
    //     expiresIn: '2h'
    //   }
    // })

    //Importar de forma asincrona nos permite realizar acciones antes de la renderización del módulo
    //Dentro de las opciones podemos importar otros modulos, e inyectar depenencias de estos mismos como el config service de config module
    //Use factory construye la configuración del m´dulo con las dependencias pre cargadas listas para ser usadas
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '2h'
        }
      })
    })
  ],
  exports: [TypeOrmModule]
})
export class AuthModule { }

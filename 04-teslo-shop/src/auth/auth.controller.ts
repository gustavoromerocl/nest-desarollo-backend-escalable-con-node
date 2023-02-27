import { Controller, Post, Body, Get, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';
import { AuthService } from './auth.service';
import { GetUSer, RawHeaders } from './decorators';
import { RoleProtected } from './decorators/role-protected.decorator';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards( AuthGuard())
  testingPrivateRoute(
    // @Req() request: Express.Request
    @GetUSer() user: User,
    @GetUSer('email') userEmail: string,
    @RawHeaders() rawHeaders: string[], //Customer decorator
    @Headers() headers: IncomingHttpHeaders //Native decorator
  ) {
    // console.log({user: request.user})
    return {
      message: "This is a private route",
      user,
      userEmail,
      rawHeaders,
      headers
    }
  }

  @Get('private2')
  // @SetMetadata('roles', ['admin', 'super-user']) //Agrega metadata en las request, primer argmuento: key, segundo argumento: value
  @RoleProtected( ValidRoles.superUser, ValidRoles.admin )
  @UseGuards( AuthGuard(), UserRoleGuard )
  privateRoute2(
    @GetUSer() user: User
  ) {
    return {
      ok: true,
      user
    }
  }
}

import { Controller, Post, Body, Get, UseGuards, Req, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';
import { AuthService } from './auth.service';
import { GetUSer, RawHeaders } from './decorators';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';

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
}

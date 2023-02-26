import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles: string[] = this.reflector.get('roles', context.getHandler());
    console.log(validRoles);

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user)
      throw new InternalServerErrorException('User not found (request)');

    console.log({userRoles: user.roles})

    for (const role of user.roles ) {
      if( validRoles.includes(role) ) return true
    }

    throw new ForbiddenException(
      `User ${user.fullName} need valid a role: [${validRoles}]`
    )
  }
}

import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards/user-role.guard';
import { ValidRoles } from '../interfaces';
import { RoleProtected } from './role-protected.decorator';

//Esta mecanismo sirve para agrupar o componer unn decoraddores de otros decoraddores
export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    //Los decoradores no se pasan con el @ en los parámetros
    RoleProtected( ...roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
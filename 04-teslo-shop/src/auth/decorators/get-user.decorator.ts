import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const GetUSer = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log(data);

    const req = ctx.switchToHttp().getRequest();
    const user = req.user = req.user;

    // if(data === 'email') return req.user.email;
    if (!user)
      throw new InternalServerErrorException('User not found (request)');


    return (!data) ? user : user[data];
  }
)
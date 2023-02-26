import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const GetUSer = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    // console.log(data);

    const req = ctx.switchToHttp().getRequest();
    const user = req.user = req.user;

    if (!user)
      throw new InternalServerErrorException('User not found (request)');


    return user;
  }
)
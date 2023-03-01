import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { Auth } from 'src/auth/decorators';
// import { ValidRoles } from 'src/auth/interfaces';
import { SeedService } from './seed.service';

@ApiTags('Seeder')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth( ValidRoles.superUser )
  executedSeed() {
    return this.seedService.runSeed();
  }
}

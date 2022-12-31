import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  
  @Get()
  getAllCars(){
    return this.cars;
  }

  @Get(':id')
  getCarByIdd(@Param('id') id: string) {
    return this.cars[id]
  }
}

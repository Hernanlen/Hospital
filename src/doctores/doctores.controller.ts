import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctoresService } from './doctores.service';
import { CreateDoctorDto } from './dto/create-doctore.dto';

@Controller('doctores')
export class DoctoresController {
  constructor(private readonly doctoresService: DoctoresService) {}

  // Ruta expuesta: POST /doctores
  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctoresService.create(createDoctorDto);
  }

  // Ruta expuesta: GET /doctores
  @Get()
  findAll() {
    return this.doctoresService.findAll();
  }
}
import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  // POST /citas (Para agendar)
  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    return this.citasService.create(createCitaDto);
  }

  // GET /citas (Lista global o filtrada por query param ?email=...)
  @Get()
  findAll(@Query('email') email?: string) {
    if (email) {
      return this.citasService.findByPaciente(email);
    }
    return this.citasService.findAll();
  }

  // PATCH /citas/:id/estado (Para aprobar o rechazar)
  @Patch(':id/estado')
  updateEstado(
    @Param('id') id: string,
    @Body() body: { estado: string }
  ) {
    return this.citasService.updateEstado(+id, body.estado);
  }
}
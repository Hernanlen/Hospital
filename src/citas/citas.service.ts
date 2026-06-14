import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitaDto } from './dto/create-cita.dto';
import { Cita } from './entities/cita.entity';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
  ) {}

  // 1. Crear una nueva solicitud de cita
  async create(createCitaDto: CreateCitaDto) {
    const nuevaCita = this.citaRepository.create(createCitaDto);
    return await this.citaRepository.save(nuevaCita);
  }

  // 2. Obtener todas las citas (Panel Global del Administrador)
  async findAll() {
    return await this.citaRepository.find({ order: { id: 'DESC' } });
  }

  // 3. Obtener citas de un paciente específico (Filtro Multiusuario)
  async findByPaciente(email: string) {
    return await this.citaRepository.find({
      where: { pacienteEmail: email },
      order: { id: 'DESC' },
    });
  }

  // 4. Cambiar estado de la cita (Aprobar / Rechazar)
  async updateEstado(id: number, estado: string) {
    const cita = await this.citaRepository.findOne({ where: { id } });
    if (!cita) throw new NotFoundException('La cita médica no existe');

    cita.estado = estado;
    return await this.citaRepository.save(cita);
  }
}
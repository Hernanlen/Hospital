import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctore.dto';
import { Doctor } from './entities/doctore.entity';

@Injectable()
export class DoctoresService {
  // Inyectamos el repositorio que se conecta a PostgreSQL
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  // Guarda un nuevo doctor en la base de datos
  async create(createDoctorDto: CreateDoctorDto) {
    const nuevoDoctor = this.doctorRepository.create(createDoctorDto);
    return await this.doctorRepository.save(nuevoDoctor);
  }

  // Devuelve la lista de todos los doctores
  async findAll() {
    return await this.doctorRepository.find();
  }
}
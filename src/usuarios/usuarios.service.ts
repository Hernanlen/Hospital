import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  // Guarda un usuario (o lo ignora si ya existe)
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExiste = await this.usuarioRepository.findOne({ where: { email: createUsuarioDto.email } });
    if (usuarioExiste) return usuarioExiste; // Si ya existe, evita duplicados

    const nuevoUsuario = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(nuevoUsuario);
  }

  // Lista todos los usuarios para el panel del Admin
  async findAll() {
    return await this.usuarioRepository.find();
  }

  // Permite cambiar el estado (Activo/Suspendido)
  async updateEstado(email: string, cuentaActiva: boolean) {
    const usuario = await this.usuarioRepository.findOne({ where: { email } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    
    usuario.cuentaActiva = cuentaActiva;
    return await this.usuarioRepository.save(usuario);
  }
}
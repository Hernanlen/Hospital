import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  tipoSeleccionado: string;

  @Column({ type: 'varchar', length: 150 })
  doctorSeleccionado: string;

  @Column({ type: 'text' })
  motivo: string;

  @Column({ type: 'varchar', length: 255, default: 'sin_foto' })
  rutaFoto: string;

  @Column({ type: 'varchar', length: 150 })
  pacienteEmail: string;

  @Column({ type: 'varchar', length: 50, default: 'Pendiente' })
  estado: string; // Pendiente, Aprobado, Rechazado
}
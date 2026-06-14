import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_doctores') // Este será el nombre de la tabla en PostgreSQL
export class Doctor {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  nombreCompleto: string;

  @Column({ type: 'varchar', length: 100 })
  especialidad: string;

  @Column({ default: true })
  estaActivo: boolean;

}
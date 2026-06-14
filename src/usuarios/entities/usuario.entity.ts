import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tabla_usuarios')
export class Usuario {
  @PrimaryColumn({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  nombreCompleto: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  fechaRegistro: string;

  @Column({ default: true })
  cuentaActiva: boolean;
}
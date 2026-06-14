import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  nombreServicio: string;

  @Column({ type: 'varchar', length: 50 })
  duracionEstimada: string;
}
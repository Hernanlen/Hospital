export class CreateDoctorDto {
  nombreCompleto: string;
  especialidad: string;
  estaActivo?: boolean; // El signo de interrogación significa que es opcional
}
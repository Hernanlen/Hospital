import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorDto } from './create-doctores.dto';

export class UpdateDoctoreDto extends PartialType(CreateDoctorDto) {}
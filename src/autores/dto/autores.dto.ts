import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';

export class AutorDto {
    
    @ApiProperty()
    @IsNotEmpty()
    public nombre: string;
    
    @ApiProperty()
    @IsNotEmpty()
   public apellido: string;

    @IsNotEmpty()
    @ApiProperty()
   public fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }

    
}
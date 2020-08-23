import {ApiProperty} from '@nestjs/swagger';

export class AutorDto {
    
    @ApiProperty()
   public nombre: string;
    
    @ApiProperty()
   public apellido: string;

    @ApiProperty()
   public fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }

    
}
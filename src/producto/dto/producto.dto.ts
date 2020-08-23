import {IsNotEmpty, IsDate} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class LibroDto {

    @ApiProperty()
    @IsNotEmpty()
    public titulo: string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    public fechaPublicacion: Date

    @ApiProperty()
    @IsNotEmpty()
    public autor: string

    constructor(titulo:string, fechaPublcacion: Date, autor: string){
        this.titulo = titulo;
        this.fechaPublicacion = fechaPublcacion;
        this.autor = autor;
    }
}
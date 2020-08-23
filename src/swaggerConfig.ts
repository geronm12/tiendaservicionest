
import {ObjectSchema} from 'swagger-ui-express';

export class AutorSchema extends ObjectSchema {
     private readonly nombre: string;
     private readonly apellido: string;
     private readonly fechaNacimiento: Date;
}
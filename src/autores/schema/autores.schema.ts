import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class AutorSchema extends Document {
   
    @Prop({required:true})
    nombre: string
    

    @Prop({required:true})
    apellido:string

    @Prop({required:true, default: Date.now})
    fechaNacimiento: Date

    @Prop({default: Date.now})
    createdAt: Date

}

export const SchemaAutor = SchemaFactory.createForClass(AutorSchema);
 
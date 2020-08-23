import {Document} from 'mongoose';

export interface Autor extends Document{

    readonly _id: string,
    readonly nombre: string,
    readonly apellido: string,
    readonly fechaNacimiento: Date
    readonly createdAt: Date

}
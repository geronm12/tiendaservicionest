import {Document, Schema} from 'mongoose';


export interface Libro extends Document {

    readonly _id : string;

    readonly titulo: string;

    readonly fechaCreacion: Date;

    readonly autor: Schema.Types.ObjectId;

    readonly createAt: Date;

}
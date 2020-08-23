
import {Schema }  from 'mongoose';

export const LibroSchema = new Schema({

    titulo: {type: String, required:true},
    fechaPublicacion: {type: Date, required: true},
    autor: {type: Schema.Types.ObjectId, required: true, ref: 'Autor'},
    createAt: {type:Date, required:true, default: new Date(Date.now())}

});


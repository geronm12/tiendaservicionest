import { Module } from "@nestjs/common";

import { AutoresController } from "./autores.controller";
import { AutoresService } from "./autores.service";

import {MongooseModule} from '@nestjs/mongoose';
import {SchemaAutor} from './schema/autores.schema';

@Module({
     
    imports: [MongooseModule.forFeature([{name: 'Autor', schema: SchemaAutor}])],
    controllers:[AutoresController],
    providers: [AutoresService]

})

export class AutoresModule{}
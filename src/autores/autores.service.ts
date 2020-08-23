
import {Injectable} from '@nestjs/common';
 
import {Model, isValidObjectId} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
 

import {AutorDto} from './dto/autores.dto';
import {Autor} from './interface/autor.interface';
import { error } from 'console';

@Injectable()
export class AutoresService {

constructor(@InjectModel('Autor') private readonly iAutor: Model<Autor>) {}

    async getAutores(): Promise<Autor[]>{

        const autores = await this.iAutor.find();

        if(!autores){
            throw new error("Ocurrió un error al buscar los autores");
        }

        return autores;

    }

    async getAutor(autorId: string): Promise<Autor> {
        
           const autor = await this.iAutor.findById(autorId);
 

          if(!autor){
            return null;
          } 

          return autor;

    }
 

     

    async createAutor(autorDto: AutorDto): Promise<Autor> {
        const newAutor = new this.iAutor(autorDto);
        await newAutor.save();
        return newAutor
    }

    async updateAutor(autorId: string, autorDto: AutorDto) : Promise<any> {

        
        const updatedAutor = await this.iAutor.findByIdAndUpdate(autorId, autorDto, {new :true});
        return updatedAutor;
    }

    async deleteAutor(autorId: string) : Promise<Boolean> {
        const deleteAutor = await this.iAutor.findByIdAndDelete(autorId);
        console.log(deleteAutor);
        if(deleteAutor){
            return true;
        }else{
            return false;
        }

    }


}
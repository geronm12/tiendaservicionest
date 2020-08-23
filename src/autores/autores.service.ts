
import {Injectable} from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';


import {AutorDto} from './dto/autores.dto';
import {Autor} from './interface/autor.interface';

@Injectable()
export class AutoresService {

constructor(@InjectModel('Autor') private readonly iAutor: Model<Autor>) {}

    async getAutores(): Promise<Autor[]>{
        return await this.iAutor.find();
    }

    async getAutor(autorId: string): Promise<Autor> {
        return await this.iAutor.findById(autorId);
    }

    async createAutor(autorDto: AutorDto): Promise<Autor> {
        const newAutor = new this.iAutor(autorDto);
        await newAutor.save();
        return newAutor
    }

    async updateAutor(autorId: string, autorDto: AutorDto) : Promise<any> {
        const updatedAutor = await this.iAutor.findByIdAndUpdate(autorId, autorDto, {new: true});
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
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {ObjectId} from 'mongodb';
import { Libro } from './interface/producto.interface';
import { LibroDto } from './dto/producto.dto';

@Injectable()
export class ProductoService {


    constructor(@InjectModel('Libro') private readonly iLibro: Model<Libro>) {}

    async getBooks() : Promise<Libro[]> {

        const libros = await this.iLibro.find();

        if(!libros){
            throw new Error("Ocurrió un error al traer los libros");
        }

        return libros;


    }

    async getBookById(id: string) : Promise<Libro> {

        const libro = await this.iLibro.findById(id)
        .populate('autor');
    
        if(!libro) {
            throw new Error('Ocurrió un error al traer el libro');
        }

        return libro;
    }

    async getBookByAutorId(autorId: string) : Promise<Libro[]> {

        const id = new ObjectId(autorId);  

        const libros =  await this.iLibro.find().where({autor: id})
        .sort({fechaPublicaion: -1 })
        .populate('autor');

        if(!libros){
            throw new Error("Ocurrió un error al traer los libros");
        }

        return libros;

    }

    async createBook(libroDto: LibroDto) : Promise<Libro> {

        const libros = new this.iLibro(libroDto);
        const res =  await libros.save();

        return res;

    }

    
    async updateBook(libroId: string, libroDto: LibroDto) : Promise<any> {

        const updatedBook = await this.iLibro.findByIdAndUpdate(libroId, {
            titulo: libroDto.titulo,
            fechaPublicacion: libroDto.fechaPublicacion
        }, { new:true });

        if(!updatedBook){
            throw new Error("Ocurrió un error al actualizar el libro");
        }

        return updatedBook;
    }

    async deleteBook(libroId: string) : Promise<Boolean> {

        const isDeleted = await this.iLibro.findOneAndDelete({_id: libroId});

        if(isDeleted){
            return true;
        }

        return false;

    }

}

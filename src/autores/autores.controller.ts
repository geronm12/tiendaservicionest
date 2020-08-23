
import {Controller, Get, Res, HttpStatus, Post, Body, Req, Put, Delete} from '@nestjs/common';
import { AutoresService } from './autores.service';
import {AutorDto} from './dto/autores.dto';
import {ApiQuery, ApiBody , ApiTags} from '@nestjs/swagger'
 

 @Controller('/autores')
 @ApiTags('Autores')
 export class AutoresController {
    constructor(private readonly autoresService: AutoresService) {}

    @Post('/create')
    
    async createAutor(@Res() res, @Body() autorDto: AutorDto){
        const autor = await this.autoresService.createAutor(autorDto);
       
        if(!autor) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                   ok:false,
                   error: 'Ocurrió un error al guardar el autor'     
                });
        }

        return res.status(HttpStatus.OK).json({
                ok: true,
                autor
        });

    }


    @Get()
    async getAutores(@Res() res) {
        const autores = await this.autoresService.getAutores();
        return res.status(HttpStatus.OK).json(autores);
        }

    @Get('/obtener')
    @ApiQuery({

        name: 'Id'
      
    })

    async getAutorById(@Res() res, @Req() req) {
        
        const { Id } = req.query;       

        if(!Id){
            return res.status(HttpStatus.BAD_REQUEST).json({
                ok: false,
                err: 'El id es obligatorio'
            })
        }


        const autor = await this.autoresService.getAutor(Id);

        if(!autor) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                  ok:false,
                  err: 'No se encontró un autor con ese id'
                });
        }

        return res.status(HttpStatus.OK).json({
                ok: true,
                autor
        });
        
    }


    @Put('/update')
    @ApiQuery({
        name: 'Id'
    })
    async updateAutor(@Res() res, @Req() req, @Body() autorDto: AutorDto){

        const {Id} = req.query;

        
        if(!Id){
            return res.status(HttpStatus.BAD_REQUEST).json(
                {ok: false,
                err: 'El Id es obligatorio'}
            )
        }

        const updatedUser = await this.autoresService.updateAutor(Id, autorDto);

        if(!updatedUser){
            return res.status(HttpStatus.BAD_REQUEST).json({
                ok: false,
                err: 'Ocurrió un error al actualizar al autor'
            })
        }

        return res.status(HttpStatus.OK).json({
            ok:true,
            updatedUser
        })


    }


    @Delete('/delete')
    @ApiQuery({
        name: 'Id'
    })
    async deleteAutor(@Res() res, @Req() req){

         const {Id} = req.query;

         if(!Id){
             return res.status(HttpStatus.BAD_REQUEST).json({
                 ok: false,
                 err: 'El id es obligatorio'
             })
         }

         const deletedAutor = await this.autoresService.deleteAutor(Id);

         if(!deletedAutor){
            return res.status(HttpStatus.BAD_REQUEST).json({
                ok: false,
                err: 'No se pudo eliminar'
            })
         }


         return res.status(HttpStatus.OK).json({
             ok: true,
             mensaje: 'Autor borrado con éxito',
             deletedAutor
         })
    }
 }

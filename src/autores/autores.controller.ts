
import {Controller, Get, Res, HttpStatus, Post, Body, Req} from '@nestjs/common';
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

 }

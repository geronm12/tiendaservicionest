import { Controller, Post, Res, Body, Get, Param, Req, Put, Delete, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiParam } from '@nestjs/swagger';
import { ProductoService } from './producto.service';
import { LibroDto } from './dto/producto.dto';

@Controller('/productos')
@ApiTags('Productos')

export class ProductoController {

constructor(private readonly productoServicio : ProductoService) {}


@Post('/create')
async createProduct(@Res() res, @Body() libroDto:LibroDto){
    const libro = await this.productoServicio.createBook(libroDto);

    return res.status(HttpStatus.OK).json({
        ok: true,
        libro
    })

}


@Get('/')
async getBooks(@Res() res){
    const libros = await this.productoServicio.getBooks();

    return res.status(HttpStatus.OK).json({
        ok: true,
        libros
    })
}

@Get('/obtener')
@ApiQuery({
    name: 'Id'
})

async getBookById(@Res() res, @Req() req) {
    const {Id} = req.query;
    
    const libro = await this.productoServicio.getBookById(Id);

    return res.status(HttpStatus.OK).json({
        ok: true,
        libro
    })
}



@Get('/:autorId')
@ApiParam({
    name: 'autorId'
})
async getBookByAutorId(@Res() res, @Param('autorId') autorId){

    console.log(autorId);

    const libros = await this.productoServicio.getBookByAutorId(autorId);

    return res.status(HttpStatus.OK).json({
        ok: true,
        libros
    })

}



@Put('/modificar')
@ApiQuery({
    name: 'Id'
})
async updateBook(@Res() res, @Req() req, @Body() libroDto: LibroDto){

    const {Id} = req.query;

    const book = await this.productoServicio.updateBook(Id , libroDto);

    return res.status(HttpStatus.OK).json({
        ok: true,
        book
    })

}




@Delete('/delete')
@ApiQuery({
    name: 'Id'
})
async deleteBook(@Res() res, @Req() req){
     
    const {Id} = req.query;

    const isDeleted = await this.productoServicio.deleteBook(Id);

    return res.status(HttpStatus.OK).json({
        ok: true,
        isDeleted
    })

    

}


}

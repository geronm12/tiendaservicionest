import { Module } from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose';
import { AutoresModule } from './autores/autores.module';
import { ProductoModule } from './producto/producto.module';
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [AutoresModule, ProductoModule, CarritoModule,
    MongooseModule.forRoot("mongodb://localhost:27017/tiendaServicio", {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

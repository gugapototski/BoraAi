import { Body,Controller,Delete,Get,Param,Post,Put } from "@nestjs/common";
import { CaronaService } from './carona.service';
import { CaronaDTO } from "./carona.dto";



@Controller('Carona')
export class CaronaController{
    constructor(private readonly caronaService : CaronaService){}

    @Post()
    async create(@Body() data: CaronaDTO){
        return this.caronaService.create(data);
    }

    @Get()
    async findAll(){
        return this.caronaService.findAll();
    }
    @Put(':id')
    async update(@Param('id') id: string,@Body() data: CaronaDTO){
        return this.caronaService.update(parseInt(id),data);
    }
    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.caronaService.delete(parseInt(id));
    }
}
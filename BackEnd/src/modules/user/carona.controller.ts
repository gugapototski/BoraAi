import { Body,Controller,Delete,Get,Param,Post,Put } from "@nestjs/common";
import { CaronaService } from './carona.service';
import { CaronaDTO } from "./carona.dto";
import { get } from "http";

@Controller('Carona')
export class CaronaController{
    constructor(private readonly caronaService : CaronaService){}

    @Post()
    async create(@Body() data: CaronaDTO){
        return this.caronaService.create(data);
    }

    @Get()
    async fin
}
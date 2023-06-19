import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CaronaService } from './carona.service';
import { CaronaDTO } from './carona.dto';

@Controller('Carona')
export class CaronaController {
  constructor(private readonly caronaService: CaronaService) {}

  @Post(':id/pegar')
  async pegarCarona(@Param('id') id: string, @Body('userId') userId: string) {
    const caronaId = parseInt(id);
    const userIdParsed = parseInt(userId);

    return this.caronaService.takeCarona(caronaId, userIdParsed);
  }

  @Post()
  async create(@Body() data: CaronaDTO) {
    return this.caronaService.create(data);
  }

  @Get()
  async findAll() {
    return this.caronaService.findAll();
  }

  @Get('ativa')
  async findActiveCaronas() {
    return this.caronaService.findActiveCaronas();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CaronaDTO) {
    return this.caronaService.update(parseInt(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.caronaService.delete(parseInt(id));
  }

  @Get('pendentes/:userId')
  async getCaronasPendentes(@Param('userId') userId: string) {
    return this.caronaService.findPendentesByUserId(parseInt(userId));
  }

  @Post(':caronaId/confirmar/:userId')
  async confirmarCarona(
    @Param('caronaId') caronaId: string,
    @Param('userId') userId: string,
  ) {
    try {
      const carona = await this.caronaService.confirmCarona(
        parseInt(caronaId),
        parseInt(userId),
      );
      return { message: 'Carona confirmada com sucesso', carona };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post(':caronaId/cancelar')
  async cancelarCarona(@Param('caronaId') caronaId: string) {
    try {
      const carona = await this.caronaService.cancelarCarona(
        parseInt(caronaId),
      );
      return { message: 'Carona cancelada com sucesso', carona };
    } catch (error) {
      return { error: error.message };
    }
  }
}

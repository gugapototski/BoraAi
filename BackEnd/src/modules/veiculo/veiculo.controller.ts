import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { veiculoDTO } from './veiculo.dto';

@Controller('veiculo')
export class veiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  async create(@Body() veiculoDTO: veiculoDTO) {
    return this.veiculoService.create(veiculoDTO);
  }

  @Get()
  async findAll() {
    return this.veiculoService.findAll();
  }

  @Get(':userId')
  async findById(@Param('userId') userId: string) {
    return this.veiculoService.findByUserId(parseInt(userId));
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.veiculoService.delete(parseInt(id));
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { HistCaronasService } from './hist.service';

@Controller('hist-caronas')
export class HistCaronasController {
  constructor(private readonly histCaronasService: HistCaronasService) {}

  @Get()
  findAll() {
    return this.histCaronasService.findAll();
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: number) {
    return this.histCaronasService.findByUserId(userId);
  }
}

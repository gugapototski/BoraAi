import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AvaliacaoDTO } from './avaliacao.dto';
import { AvaliacaoService } from './avaliacao.service';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async processarAvaliacao(@Body() avaliacaoDTO: AvaliacaoDTO) {
    const novaAvaliacao = await this.avaliacaoService.processarAvaliacao(
      avaliacaoDTO,
    );
    return novaAvaliacao;
  }

  @Get('media/:userId')
  async obterMediaAvaliacoes(@Param('userId') userId: number) {
    const mediaAvaliacoes =
      await this.avaliacaoService.obterMediaAvaliacoesPorUsuario(userId);
    return { mediaAvaliacoes };
  }
}

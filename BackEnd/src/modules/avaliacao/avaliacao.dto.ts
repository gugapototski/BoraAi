import { ApiProperty } from '@nestjs/swagger';

export class AvaliacaoDTO {
  
  @ApiProperty()
  autorUserId: number;

  @ApiProperty()
  avaliadoUserId: number;

  @ApiProperty()
  ST_avaliacao: number;

  @ApiProperty()
  comentario_avaliacao: string;

  @ApiProperty()
  status_avaliaçao: string;

  constructor(
    autorUserId: number,
    avaliadoUserId: number,
    ST_avaliacao: number,
    comentario_avaliacao: string,
    status_avaliaçao: string
  ) {
    this.autorUserId = autorUserId;
    this.avaliadoUserId = avaliadoUserId;
    this.ST_avaliacao = ST_avaliacao;
    this.comentario_avaliacao = comentario_avaliacao;
    this.status_avaliaçao = status_avaliaçao;
  }
}

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
}

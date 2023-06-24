import { ApiProperty } from '@nestjs/swagger';

export class CaronaDTO {
  @ApiProperty()
  userIdCarona: number;

  @ApiProperty()
  end_origem: string;

  @ApiProperty({ type: String })
  hr_saida: string;

  @ApiProperty({ type: String })
  hr_chegada: string;

  @ApiProperty()
  met_pagamento: string;

  @ApiProperty()
  ST_carona: string;
}

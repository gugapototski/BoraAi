import { ApiProperty } from '@nestjs/swagger';

export class CorridaDTO {
  @ApiProperty()
  IdUserCorrida: number;
  @ApiProperty()
  latitudeUserOrigem: string;
  @ApiProperty()
  longitudeUserOrigem: string;
  @ApiProperty()
  latitudeUserDestino: string;
  @ApiProperty()
  longitudeUserDestino: string;
  @ApiProperty()
  enderco: string;
  @ApiProperty()
  hr_saida: string;
  @ApiProperty()
  hr_chegada: string;
}
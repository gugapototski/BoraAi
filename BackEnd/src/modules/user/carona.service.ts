import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CaronaDTO } from './carona.dto';

@Injectable()
@Injectable()
export class CaronaService {
  constructor(private prisma: PrismaService) {}

  async create(caronaDto: CaronaDTO) {
    const { end_origem, hr_saida, hr_chegada, met_pagamento } = caronaDto;

    return this.prisma.carona.create({
      data: {
        DS_ENDERECODEST: end_origem,
        DT_SAIDA: hr_saida,
        DT_CARONA: hr_chegada,
        TP_PAGAMENTO: met_pagamento,
      },
    });
  }

  async findAll() {
    return this.prisma.carona.findMany();
  }

  async findById(id: number) {
    return this.prisma.carona.findUnique({
      where: { CD_CARONA: id },
    });
  }

  async update(id: number, caronaDto: CaronaDTO) {
    const { end_origem, hr_saida, hr_chegada, met_pagamento } = caronaDto;

    return this.prisma.carona.update({
      where: { CD_CARONA: id },
      data: {
        DS_ENDERECODEST: end_origem,
        DT_SAIDA: hr_saida,
        DT_CARONA: hr_chegada,
        TP_PAGAMENTO: met_pagamento,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.carona.delete({
      where: { CD_CARONA: id },
    });
  }
}

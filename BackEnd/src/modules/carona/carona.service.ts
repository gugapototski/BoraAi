import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CaronaDTO } from './carona.dto';


@Injectable()
export class CaronaService {
  constructor(private prisma: PrismaService) {}

  async create(caronaDto: CaronaDTO) {
    const newCarona = await this.prisma.carona.create({
      data: {
          end_origem: caronaDto.end_origem,
          hr_saida: caronaDto.hr_saida,
          hr_chegada: caronaDto.hr_chegada,
          met_pagamento: caronaDto.met_pagamento,
      },
  });
  }

  async findAll() {
    return this.prisma.carona.findMany();
  }

  async findById(id: number) {
    return this.prisma.carona.findUnique({
      where: { id, },
    });
  }

  async update(id: number, caronaDto: CaronaDTO) {
    const { end_origem, hr_saida, hr_chegada, met_pagamento } = caronaDto;

    return this.prisma.carona.update({
      where: { id, },
      data: {
        end_origem: caronaDto.end_origem,
        hr_saida: caronaDto.hr_saida,
        hr_chegada: caronaDto.hr_chegada,
        met_pagamento: caronaDto.met_pagamento,
    },
    });
  }

  async delete(id: number) {
    return this.prisma.carona.delete({
      where: { id, },
    });
  }
}

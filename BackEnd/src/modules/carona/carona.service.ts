import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CaronaDTO } from './carona.dto';
import { async } from 'rxjs';
import { AvaliacaoService } from '../avaliacao/avaliacao.service';
import { AvaliacaoDTO } from '../avaliacao/avaliacao.dto';

@Injectable()
export class CaronaService {
  constructor(
    private prisma: PrismaService,
    private avaliacaoService: AvaliacaoService,
  ) {}

  async create(caronaDto: CaronaDTO) {
    const { userIdCarona } = caronaDto;

    // Verificar se o usuário possui um veículo cadastrado
    const veiculo = await this.prisma.veiculo.findFirst({
      where: {
        userId: userIdCarona,
      },
    });

    if (!veiculo) {
      throw new NotFoundException(
        'Este usuário não possui um veículo cadastrado.',
      );
    }

    // Verificar se o usuário possui uma carona ativa ou pendente
    const caronasPendentes = await this.findPendentesByUserId(userIdCarona);
    const caronasAtivas = await this.findAtivasByUserId(userIdCarona);

    if (caronasPendentes.length > 0) {
      throw new NotFoundException('Você já possui uma carona pendente.');
    } else if (caronasAtivas.length > 0) {
      throw new NotFoundException('Você já possui uma carona ativa.');
    }

    // Resto do código para criar a carona
    const newCarona = await this.prisma.carona.create({
      data: {
        userIdCarona: caronaDto.userIdCarona,
        end_origem: caronaDto.end_origem,
        hr_saida: caronaDto.hr_saida,
        hr_chegada: caronaDto.hr_chegada,
        met_pagamento: caronaDto.met_pagamento,
        ST_carona: caronaDto.ST_carona,
      },
    });

    const newAvaliacao: AvaliacaoDTO =  {
      autorUserId: userIdCarona,
      avaliadoUserId: number,
      ST_avaliacao: number,
      comentario_avaliacao: string,
      status_avaliaçao: string,
    }

    this.avaliacaoService.processarAvaliacao(newAvaliacao);

    // Atualizar caronasFornecidas na tabela hist_caronas
    const histCarona = await this.prisma.hist_caronas.findFirst({
      where: {
        userId: caronaDto.userIdCarona,
      },
    });

    if (histCarona) {
      await this.prisma.hist_caronas.update({
        where: {
          id: histCarona.id,
        },
        data: {
          caronasFornecidas: histCarona.caronasFornecidas + 1,
        },
      });
    }

    return newCarona;
  }

  async findAll() {
    return this.prisma.carona.findMany();
  }

  async findById(id: number) {
    return this.prisma.carona.findUnique({
      where: { id },
    });
  }

  async update(id: number, caronaDto: CaronaDTO) {
    const { end_origem, hr_saida, hr_chegada, met_pagamento, ST_carona } =
      caronaDto;

    return this.prisma.carona.update({
      where: { id },
      data: {
        end_origem,
        hr_saida,
        hr_chegada,
        met_pagamento,
        ST_carona,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.carona.delete({
      where: { id },
    });
  }

  async findActiveCaronas() {
    return this.prisma.carona.findMany({
      where: {
        ST_carona: 'Ativa',
      },
    });
  }

  async updateHistCaronas(userId: number) {
    const histCarona = await this.prisma.hist_caronas.findFirst({
      where: { userId: userId },
    });

    if (!histCarona) {
      throw new Error('HistCarona não encontrado');
    }

    await this.prisma.hist_caronas.update({
      where: { id: histCarona.id },
      data: {
        caronasPegas: histCarona.caronasPegas + 1,
      },
    });
  }

  async takeCarona(caronaId: number, userId: number) {
    const carona = await this.prisma.carona.findUnique({
      where: { id: caronaId },
    });

    if (!carona) {
      throw new Error('Carona não encontrada');
    }

    if (carona.ST_carona !== 'Ativa') {
      throw new Error('Carona não está ativa');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const caronaSolicitada = await this.prisma.carona.findFirst({
      where: {
        id: caronaId,
        solicitanteId: userId,
        ST_carona: 'Pendente',
      },
    });

    if (caronaSolicitada) {
      throw new Error('Carona já solicitada');
    }

    // Atualizar o usuário associado à carona
    await this.prisma.carona.update({
      where: { id: caronaId },
      data: {
        ST_carona: 'Pendente',
        solicitanteId: userId,
      },
    });

    return carona;
  }

  async confirmCarona(caronaId: number, userId: number) {
    const carona = await this.prisma.carona.findUnique({
      where: { id: caronaId },
    });

    if (!carona) {
      throw new Error('Carona não encontrada');
    }

    if (carona.ST_carona !== 'Pendente' || carona.solicitanteId !== userId) {
      throw new Error('Essa carona não pode ser confirmada');
    }

    // Atualizar o status da carona para "Em andamento"
    await this.prisma.carona.update({
      where: { id: caronaId },
      data: {
        ST_carona: 'Em andamento',
      },
    });

    return carona;
  }

  async cancelarCarona(caronaId: number) {
    const carona = await this.prisma.carona.findUnique({
      where: { id: caronaId },
    });

    if (!carona) {
      throw new Error('Carona não encontrada');
    }

    // Verificar se a carona já está cancelada
    if (carona.ST_carona === 'Cancelada') {
      throw new Error('Carona já está cancelada!');
    }

    // Atualizar o status da carona para "Ativa" e remover o solicitanteId
    const updatedCarona = await this.prisma.carona.update({
      where: { id: caronaId },
      data: {
        ST_carona: 'Ativa',
        solicitanteId: null,
      },
    });

    return updatedCarona;
  }

  async findPendentesByUserId(userId: number) {
    return this.prisma.carona.findMany({
      where: {
        userIdCarona: userId,
        ST_carona: 'Pendente',
      },
    });
  }
  async findAtivasByUserId(userId: number) {
    return this.prisma.carona.findMany({
      where: {
        userIdCarona: userId,
        ST_carona: 'Ativa',
      },
    });
  }

  async setCaronaInativa(idCarona: number, userId: number) {
    await this.prisma.carona.update({
      where: { id: idCarona },
      data: {
        ST_carona: 'Inativa',
      },
    });
    await this.updateHistCaronas(userId);
  }

  async findCaronaAndamentoIdsolicitante(userId: number) {
    return this.prisma.carona.findMany({
      where: {
        solicitanteId: userId,
        ST_carona: 'Em andamento',
      },
    });
  }
  async findCaronaAndamentoUserid(userId: number) {
    return this.prisma.carona.findMany({
      where: {
        userIdCarona: userId,
        ST_carona: 'Em andamento',
      },
    });
  }
  async findCaronapendenteIdCarona(idCarona: number) {
    return this.prisma.carona.findMany({
      where: {
        id: idCarona,
        ST_carona: 'Pendente',
      },
    });
  }
}

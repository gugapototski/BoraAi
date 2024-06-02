import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CorridaDTO } from './corrida.dto';

@Injectable()
export class CorridaService {
  constructor(private prisma: PrismaService) {}

  async create(corridaDto: CorridaDTO) {
    // Verificar se o usuário existe
    const user = await this.prisma.user.findUnique({
      where: {
        id: corridaDto.IdUserCorrida,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    const newCorrida = await this.prisma.corrida.create({
      data: {
        IdUserCorrida: corridaDto.IdUserCorrida,
        latitudeUserOrigem: corridaDto.latitudeUserOrigem,
        longitudeUserOrigem: corridaDto.longitudeUserOrigem,
        latitudeUserDestino: corridaDto.latitudeUserDestino,
        longitudeUserDestino: corridaDto.longitudeUserDestino,
        hr_saida: corridaDto.hr_saida,
        hr_chegada: corridaDto.hr_chegada,
        ST_corrida: 'Disponivel',
      },
    });

    return newCorrida;
  }

  async findAll() {
    return this.prisma.corrida.findMany();
  }

  async findDisponiveis() {
    return this.prisma.corrida.findMany({
      where: {
        ST_corrida: 'Disponivel',
      },
    });
  }

  async pegarCorrida(corridaId: number, motoristaId: number) {
    const corrida = await this.prisma.corrida.findUnique({
      where: { idCorrida: corridaId },
    });

    if (!corrida) {
      throw new NotFoundException('Corrida não encontrada');
    }

    if (corrida.ST_corrida !== 'Disponivel') {
      throw new BadRequestException('Corrida não está disponível');
    }

    const motorista = await this.prisma.user.findUnique({
      where: { id: motoristaId },
    });

    if (!motorista) {
      throw new NotFoundException('Motorista não encontrado');
    }

    if (motorista.flagMotorista !== 'T') {
      throw new BadRequestException('Usuário não é um motorista autorizado');
    }

    return this.prisma.corrida.update({
      where: { idCorrida: corridaId },
      data: {
        ST_corrida: 'Em andamento',
        idUserMotorista: motoristaId,
      },
    });
  }

  async cancelarCorrida(corridaId: number, userId: number, isMotorista: boolean) {
    const corrida = await this.prisma.corrida.findUnique({
      where: { idCorrida: corridaId },
    });

    if (!corrida) {
      throw new NotFoundException('Corrida não encontrada');
    }

    if (isMotorista && corrida.idUserMotorista !== userId) {
      throw new BadRequestException('Você não é o motorista desta corrida');
    } else if (!isMotorista && corrida.IdUserCorrida !== userId) {
      throw new BadRequestException('Você não é o passageiro desta corrida');
    }

    if (corrida.ST_corrida === 'Em andamento') {
      return this.prisma.corrida.update({
        where: { idCorrida: corridaId },
        data: {
          ST_corrida: 'Disponivel',
          idUserMotorista: null,
        },
      });
    } else {
      return this.prisma.corrida.update({
        where: { idCorrida: corridaId },
        data: {
          ST_corrida: 'Cancelada',
        },
      });
    }
  }

  async delete(corridaId: number) {
    return this.prisma.corrida.delete({
      where: { idCorrida: corridaId },
    });
  }

  async finalizarCorrida(corridaId: number, motoristaId: number) {
    const corrida = await this.prisma.corrida.findUnique({
      where: { idCorrida: corridaId },
    });

    if (!corrida) {
      throw new NotFoundException('Corrida não encontrada');
    }

    if (corrida.idUserMotorista !== motoristaId) {
      throw new BadRequestException('Você não é o motorista desta corrida');
    }

    return this.prisma.corrida.update({
      where: { idCorrida: corridaId },
      data: {
        ST_corrida: 'Finalizada',
      },
    });
  }
}

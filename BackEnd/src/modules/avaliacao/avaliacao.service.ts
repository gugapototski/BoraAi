import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AvaliacaoDTO } from './avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}

  async findAll(autorUserId: number): Promise<AvaliacaoDTO[]>{

    const avaliacoes = await this.prisma.avaliacao.findMany({
      where: {
        autorUserId: autorUserId
      }
    })

    return avaliacoes
  }

  async obterMediaAvaliacoesPorUsuario(avaliadoUserId: number): Promise<number> {
    const userIdInt = parseInt(avaliadoUserId.toString(), 10); // Converter para número inteiro

    const avaliacoesUsuario = await this.prisma.user.findUnique({
      where: {
        id: userIdInt,
      },
      include: {
        avaliacoesAvaliado: true,
      },
    });

    const totalAvaliacoes = avaliacoesUsuario.avaliacoesAvaliado.length;
    const somaAvaliacoes = avaliacoesUsuario.avaliacoesAvaliado.reduce(
      (total, avaliacao) => total + avaliacao.ST_avaliacao,
      0,
    );

    if (totalAvaliacoes > 0) {
      const mediaAvaliacoes = somaAvaliacoes / totalAvaliacoes;
      return parseFloat(mediaAvaliacoes.toFixed(1)); // Arredonda para uma casa decimal
    } else {
      // Caso não haja avaliações, retorne um valor padrão ou uma mensagem indicando a ausência de avaliações.
      return 0; // Valor padrão (0) quando não há avaliações
      // ou
      // throw new NotFoundException('Nenhuma avaliação encontrada'); // Lança uma exceção informando que não há avaliações
    }
  }

  async processarAvaliacao(avaliacaoDTO: AvaliacaoDTO) {

    // Salvando nova avaliação
    const novaAvaliacao = await this.prisma.avaliacao.create({
      data: {
        autorUserId: avaliacaoDTO.autorUserId,
        avaliadoUserId: avaliacaoDTO.avaliadoUserId,
        ST_avaliacao: avaliacaoDTO.ST_avaliacao,
        comentario_avaliacao: avaliacaoDTO.comentario_avaliacao
      },
    });

    return novaAvaliacao;
  }
}

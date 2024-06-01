import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AvaliacaoDTO } from './avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}

  async findAll(autorUserId: number): Promise<AvaliacaoDTO[]>{

    const autorUserIdInt = parseInt(autorUserId.toString(), 10);

    const avaliacoes = await this.prisma.avaliacao.findMany({
      where: {
        autorUserId: autorUserIdInt
      }
    })

    return avaliacoes
  }

  async findLast(autorUserId: number): Promise<AvaliacaoDTO>{

    const autorUserIdInt = parseInt(autorUserId.toString(), 10);

    const avaliacao = await this.prisma.avaliacao.findFirst({
      where: {
        autorUserId: autorUserIdInt
      },
      orderBy: {
        id: "desc",
      }
    })
    
    if (!avaliacao){

      throw Error("Nenhuma avaliação foi encontrada!")
    }

    return avaliacao
  }

  async obterMediaAvaliacoesPorUsuario(avaliadoUserId: number): Promise<number> {
    const avaliadoUserIdInt = parseInt(avaliadoUserId.toString(), 10); // Converter para número inteiro

    const avaliacoesUsuario = await this.prisma.user.findUnique({
      where: {
        id: avaliadoUserIdInt,
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

    const {autorUserId, avaliadoUserId, ST_avaliacao, comentario_avaliacao} = avaliacaoDTO

    try {
       
      const novaAvaliacao = await this.prisma.avaliacao.create({
        data: {
          autorUserId: parseInt(autorUserId.toString(), 10),
          avaliadoUserId: parseInt(avaliadoUserId.toString(), 10),
          ST_avaliacao: parseInt(ST_avaliacao.toString(), 10),
          comentario_avaliacao: comentario_avaliacao
        },
      });

      return novaAvaliacao;

    } catch (error) {
      
      throw new Error('Error ao tentar criar avaliação');
    }
  }
}

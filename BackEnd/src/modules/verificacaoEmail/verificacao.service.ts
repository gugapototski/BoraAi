import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MailerService } from '../mailer/mailer.service';
import { UserDTO } from '../user/user.dto';

@Injectable()
export class VerificacaoService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async create(user: UserDTO){

    const existingVerificacao = await this.prisma.verificacao_email.findFirst({
      where: {
        userId: user.id
      }
    })

    if (existingVerificacao) {
      throw new NotFoundException('Verificacao já existe');
    }

    const newToken = this.generateVerificacaoToken()

    const newVerificacao = await this.prisma.verificacao_email.create({
      data: {
        userId: user.id,
        token_verificacao: newToken,
      },
    })

    this.mailerService.sendVerificationEmail(user.id, user.email, newVerificacao.token_verificacao)

    return newVerificacao;
  }

  async confirmationVerification(idUser: number, verificacaoToken: String){

    const verificacao = await this.prisma.verificacao_email.findFirst({
      where: {
        userId: idUser,
      }
    })

    if (!verificacao) {
      throw new Error('O verificão do usuário não existe!');
    }

    if (verificacao.token_verificacao !== verificacaoToken){
      
      throw new Error('Token de verificação enviado não corresponde ao token salvo no banco!')
    }

    const updateVerificacao = await this.prisma.verificacao_email.update({
      data: {
        email_verificado: true,
      },
      where: {
        id: verificacao.id,
      },
    });

    if (!updateVerificacao){

      throw new Error("Erro ao tentar atulizar verificação!")
    }

    return "E-mail verificado com sucesso!"
  }

  async findByIdUser(idUser: number){

    const verificacao = await this.prisma.verificacao_email.findFirst({
      where: {
        userId: idUser
      }
    })

    if (!verificacao) {
      throw new Error('O verificão do usuário não existe!');
    }

    return verificacao
  }

  private generateVerificacaoToken(): string {

    return require("node:crypto").randomUUID();
  }
}

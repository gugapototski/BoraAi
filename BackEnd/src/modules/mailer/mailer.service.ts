import { Injectable } from "@nestjs/common";
import * as nodeMailer from 'nodemailer';

@Injectable()
export class MailerService {

    private transporter: nodeMailer.transporter

    constructor () {
        
        this.transporter = nodeMailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'jessica.mcclure@ethereal.email',
                pass: 'E8HAVZgMMNWPpRZK1t'
            }
        });
    }

    async sendVerificationEmail(id: number, email: string, verificacaoToken: string): Promise<void> {

        var mailOptions = {
            from: "your_email@gmail.com",
            to: email,
            subject: "BoraAí - Verficação do email",
            text: "Cofirme o e-mail viculado a sua conta!", 
            html: `<h1>Recebemos seu pedido de cadastro em nosso aplicativo!</h1><h3>Para verificar seu email e concluir o cadastro, clique <a href="https://boraaideplot-api.onrender.com/verificacao-email/${id}/${verificacaoToken}">aqui</a>.</h3><p>Se o botão acima não funcionar, copie e cole o seguinte link em seu navegador:</p><p>https://boraaideplot-api.onrender.com/verificacao-email/${id}/${verificacaoToken}</p>`
        }

        await this.transporter.sendMail(mailOptions)
    }
}
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CaronaModule } from './modules/carona/carona.module';
import { AvaliacaoModule } from './modules/avaliacao/avaliacao.module';
@Module({
  imports: [UserModule, CaronaModule, AvaliacaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CaronaModule } from './modules/carona/carona.module';
import { AvaliacaoModule } from './modules/avaliacao/avaliacao.module';
import { HistCaronasModule } from './modules/histCarona/hist.module';
import { VeiculoModule } from './modules/veiculo/veiculo.module';
import { VerificacaoModule } from './modules/verificacaoEmail/verificacao.module';
@Module({
  imports: [
    UserModule,
    CaronaModule,
    AvaliacaoModule,
    HistCaronasModule,
    VeiculoModule,
    VerificacaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

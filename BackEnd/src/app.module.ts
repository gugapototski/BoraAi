import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CaronaModule } from './modules/carona/carona.module';

@Module({
  imports: [UserModule,CaronaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CaronaModule } from './modules/user/carona.module';

@Module({
  imports: [UserModule,CaronaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CorridaController } from './corrida.controller';
import { CorridaService } from './corrida.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CorridaController],
  providers: [CorridaService, PrismaService],
})
export class CorridaModule {}

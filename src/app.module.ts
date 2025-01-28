import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AtendimentosModule } from './atendimentos/atendimentos.module';


import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle', 
      host: process.env.HOST_DATABASE, 
      port: 1521, 
      username: process.env.USER_DATABASE, 
      password: process.env.PWD_DATABASE, 
      serviceName: process.env.SERVICE_DATABASE,
      entities: [],
      synchronize: false, 
    }),
    AtendimentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

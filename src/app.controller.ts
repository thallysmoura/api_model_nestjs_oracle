import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersion(): string {
    return this.appService.getVersion();
  }

  @Get('/horario')
  retornaHorario(): any {
    return this.appService.retornaHorario();
  }

  @Get('/buscaPaciente/:cpf')
  buscaPaciente(@Param('cpf') cpf: string) {
    return this.appService.buscaPaciente(cpf);
  }
}

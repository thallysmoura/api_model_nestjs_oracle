import { Controller, Get, Param } from '@nestjs/common';
import { AtendimentosService } from './atendimentos.service';

@Controller('atendimentos')
export class AtendimentosController {
  constructor(private readonly atendimentosService: AtendimentosService) {}
  
  @Get('/buscaAtendimentos/:cpf')
  retornaHorario(@Param('cpf') cpf: string){
    return this.atendimentosService.retornaHorario(cpf);
  }

}

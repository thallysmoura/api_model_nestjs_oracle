import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AtendimentosService {
  constructor(private readonly dataSource: DataSource) {} 

  async retornaHorario(cpf: string) {
    const query = `SELECT * FROM VIEW_HAM_TOTEM_PACIENTE WHERE NR_CPF = ${cpf}`;
    return await this.dataSource.query(query);
  }

}

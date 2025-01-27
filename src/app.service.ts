import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {} // Injeta o DataSource no serviço

  getVersion(): string {
    return 'API V.1.0';
  }

  // exemplo de rota sem parâmetro
  async retornaHorario(): Promise<any> {
    const query = `SELECT sysdate FROM DUAL`;
    return await this.dataSource.query(query);
  }

  // exemplo de rota com parâmetro
  async buscaPaciente(cpf: string) {
    const query = `SELECT * FROM VIEW_HAM_TOTEM_PACIENTE WHERE NR_CPF = ${cpf}`;
    return await this.dataSource.query(query);
  }

}

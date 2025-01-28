# Usar uma imagem base do Node.js
FROM node:20.11-slim

# Definir o diretório de trabalho
WORKDIR /app

# Definir o fuso horário como America/Manaus
ENV TZ=America/Manaus

# Instalar dependências do sistema necessárias para o node-gyp
RUN apt-get update && apt-get install -y \
  python3 \
  build-essential \
  openssl \ 
  && apt-get clean

# Instalar a CLI do NestJS globalmente
RUN npm install -g @nestjs/cli

# Copiar apenas os arquivos de pacotes e instalar dependências
COPY package*.json ./
RUN npm install

#RUN NODE_OPTIONS="--max-old-space-size=8192" npm run build

# Copiar o restante dos arquivos da aplicação
COPY . .


# Expor a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando padrão para iniciar a aplicação
#CMD ["sh", "./bin/startup.sh"]
RUN NODE_OPTIONS="--max-old-space-size=8192" npm run build
CMD NODE_OPTIONS="--max-old-space-size=8192" npm run start:prod
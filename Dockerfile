# Use a versão mais recente do Node.js como base
FROM node:latest

# Crie um diretório para o seu aplicativo
WORKDIR /usr/src/app

# Copie o arquivo `package.json` e `package-lock.json` para a pasta de trabalho
COPY package*.json ./

# Copie o arquivo `.env` para a pasta de trabalho
COPY .env ./

# Instale as dependências do seu aplicativo
RUN yarn

# Copie o restante do código fonte para a pasta de trabalho
COPY . .

# Exponha a porta em que seu aplicativo será executado
EXPOSE 3000

# Inicie seu aplicativo quando o contêiner for iniciado
CMD [ "yarn", "start" ]

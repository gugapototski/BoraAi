# BoraAi

![NestJS](https://img.shields.io/badge/NestJS-9-E0234E?logo=nestjs)
![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-ready-4169E1?logo=postgresql&logoColor=white)

API backend para uma plataforma de caronas, com usuarios, veiculos, corridas, historico, avaliacoes e verificacao por e-mail.

## Modulos principais

- `user`: cadastro, consulta e regras de usuario.
- `veiculo`: cadastro e gerenciamento de veiculos.
- `corrida`: fluxo de corridas/caronas.
- `histCarona`: historico de caronas.
- `avaliacao`: avaliacoes de usuarios/corridas.
- `verificacaoEmail` e `mailer`: envio e validacao de e-mail.

## Estrutura

```text
BackEnd/
  prisma/       schema e migrations
  src/          codigo NestJS
  test/         testes e2e
  swagger.json  documentacao da API
```

## Como rodar

```bash
cd BackEnd
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev
```

## Variaveis de ambiente

Crie `BackEnd/.env` a partir de `BackEnd/.env.example` e preencha a `DATABASE_URL` local. O arquivo real de ambiente nao deve ser versionado.

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "confirmarSenha" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carona" (
    "id" SERIAL NOT NULL,
    "userIdCarona" INTEGER NOT NULL,
    "end_origem" TEXT NOT NULL,
    "hr_saida" TIMESTAMP(3) NOT NULL,
    "hr_chegada" TIMESTAMP(3) NOT NULL,
    "met_pagamento" TEXT NOT NULL,
    "ST_carona" TEXT NOT NULL,
    "solicitanteId" INTEGER,

    CONSTRAINT "carona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ST_avaliacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hist_caronas" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "caronasPegas" INTEGER NOT NULL,
    "caronasFornecidas" INTEGER NOT NULL,

    CONSTRAINT "hist_caronas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiculo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nomeDoVeiculo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "DescVeiculo" TEXT NOT NULL,

    CONSTRAINT "veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "veiculo_placa_key" ON "veiculo"("placa");

-- AddForeignKey
ALTER TABLE "carona" ADD CONSTRAINT "carona_userIdCarona_fkey" FOREIGN KEY ("userIdCarona") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hist_caronas" ADD CONSTRAINT "hist_caronas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veiculo" ADD CONSTRAINT "veiculo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

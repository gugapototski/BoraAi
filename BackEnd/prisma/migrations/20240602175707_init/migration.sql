/*
  Warnings:

  - You are about to drop the `carona` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "carona" DROP CONSTRAINT "carona_IdUserCorrida_fkey";

-- DropForeignKey
ALTER TABLE "carona" DROP CONSTRAINT "carona_idUserMotorista_fkey";

-- DropTable
DROP TABLE "carona";

-- CreateTable
CREATE TABLE "corrida" (
    "idCorrida" SERIAL NOT NULL,
    "IdUserCorrida" INTEGER NOT NULL,
    "latitudeUserOrigem" TEXT NOT NULL,
    "longitudeUserOrigem" TEXT NOT NULL,
    "latitudeUserDestino" TEXT NOT NULL,
    "longitudeUserDestino" TEXT NOT NULL,
    "hr_saida" TEXT NOT NULL,
    "hr_chegada" TEXT NOT NULL,
    "ST_carona" TEXT NOT NULL,
    "idUserMotorista" INTEGER,

    CONSTRAINT "corrida_pkey" PRIMARY KEY ("idCorrida")
);

-- AddForeignKey
ALTER TABLE "corrida" ADD CONSTRAINT "corrida_IdUserCorrida_fkey" FOREIGN KEY ("IdUserCorrida") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corrida" ADD CONSTRAINT "corrida_idUserMotorista_fkey" FOREIGN KEY ("idUserMotorista") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

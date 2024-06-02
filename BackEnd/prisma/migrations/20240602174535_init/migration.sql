/*
  Warnings:

  - You are about to drop the column `userId` on the `avaliacao` table. All the data in the column will be lost.
  - The primary key for the `carona` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `end_origem` on the `carona` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `carona` table. All the data in the column will be lost.
  - You are about to drop the column `met_pagamento` on the `carona` table. All the data in the column will be lost.
  - You are about to drop the column `solicitanteId` on the `carona` table. All the data in the column will be lost.
  - You are about to drop the column `userIdCarona` on the `carona` table. All the data in the column will be lost.
  - Added the required column `autorUserId` to the `avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avaliadoUserId` to the `avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comentario_avaliacao` to the `avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IdUserCorrida` to the `carona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitudeUserDestino` to the `carona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitudeUserOrigem` to the `carona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitudeUserDestino` to the `carona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitudeUserOrigem` to the `carona` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_userId_fkey";

-- DropForeignKey
ALTER TABLE "carona" DROP CONSTRAINT "carona_userIdCarona_fkey";

-- AlterTable
ALTER TABLE "avaliacao" DROP COLUMN "userId",
ADD COLUMN     "autorUserId" INTEGER NOT NULL,
ADD COLUMN     "avaliadoUserId" INTEGER NOT NULL,
ADD COLUMN     "comentario_avaliacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "carona" DROP CONSTRAINT "carona_pkey",
DROP COLUMN "end_origem",
DROP COLUMN "id",
DROP COLUMN "met_pagamento",
DROP COLUMN "solicitanteId",
DROP COLUMN "userIdCarona",
ADD COLUMN     "IdUserCorrida" INTEGER NOT NULL,
ADD COLUMN     "idCorrida" SERIAL NOT NULL,
ADD COLUMN     "idUserMotorista" INTEGER,
ADD COLUMN     "latitudeUserDestino" TEXT NOT NULL,
ADD COLUMN     "latitudeUserOrigem" TEXT NOT NULL,
ADD COLUMN     "longitudeUserDestino" TEXT NOT NULL,
ADD COLUMN     "longitudeUserOrigem" TEXT NOT NULL,
ADD CONSTRAINT "carona_pkey" PRIMARY KEY ("idCorrida");

-- AddForeignKey
ALTER TABLE "carona" ADD CONSTRAINT "carona_IdUserCorrida_fkey" FOREIGN KEY ("IdUserCorrida") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carona" ADD CONSTRAINT "carona_idUserMotorista_fkey" FOREIGN KEY ("idUserMotorista") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_autorUserId_fkey" FOREIGN KEY ("autorUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_avaliadoUserId_fkey" FOREIGN KEY ("avaliadoUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

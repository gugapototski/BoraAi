/*
  Warnings:

  - You are about to drop the column `ST_carona` on the `corrida` table. All the data in the column will be lost.
  - Added the required column `ST_corrida` to the `corrida` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "corrida" DROP COLUMN "ST_carona",
ADD COLUMN     "ST_corrida" TEXT NOT NULL;

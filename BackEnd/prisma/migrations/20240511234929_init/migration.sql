/*
  Warnings:

  - Added the required column `token_verificacao` to the `vericacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vericacao" ADD COLUMN     "token_verificacao" TEXT NOT NULL;

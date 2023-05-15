/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `users` table. All the data in the column will be lost.
  - Added the required column `confirmarSenha` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobrenome` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "ra" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "confirmarSenha" TEXT NOT NULL
);
INSERT INTO "new_users" ("id", "nome", "ra", "telefone") SELECT "id", "nome", "ra", "telefone" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_ra_key" ON "users"("ra");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - Added the required column `ra` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "ra" INTEGER NOT NULL
);
INSERT INTO "new_users" ("dataNascimento", "id", "nome", "telefone") SELECT "dataNascimento", "id", "nome", "telefone" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_ra_key" ON "users"("ra");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

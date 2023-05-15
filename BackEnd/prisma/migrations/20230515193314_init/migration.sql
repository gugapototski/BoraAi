-- CreateTable
CREATE TABLE "Carona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "end_origem" TEXT NOT NULL,
    "hr_saida" DATETIME NOT NULL,
    "hr_chegada" DATETIME NOT NULL,
    "Met_Pagamento" TEXT NOT NULL
);

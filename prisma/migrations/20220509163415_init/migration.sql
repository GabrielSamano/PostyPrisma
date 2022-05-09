/*
  Warnings:

  - You are about to drop the `explorer2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "explorer2";

-- CreateTable
CREATE TABLE "explorer3" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "explorer3_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "explorer3_name_key" ON "explorer3"("name");

/*
  Warnings:

  - You are about to drop the column `weigth` on the `Cat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "weigth",
ADD COLUMN     "weight" DOUBLE PRECISION;

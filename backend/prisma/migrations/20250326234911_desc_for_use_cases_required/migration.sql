/*
  Warnings:

  - Made the column `description` on table `UseCase` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UseCase" ALTER COLUMN "description" SET NOT NULL;

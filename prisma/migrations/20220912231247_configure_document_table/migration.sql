/*
  Warnings:

  - You are about to drop the column `text` on the `documents` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `documents` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,type,number,validity,issueDate]` on the table `documents` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullname` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issueDate` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issuingAgency` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validity` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "documentType" AS ENUM ('rg', 'cpf');

-- DropIndex
DROP INDEX "documents_userId_title_key";

-- AlterTable
ALTER TABLE "documents" DROP COLUMN "text",
DROP COLUMN "title",
ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "issueDate" TEXT NOT NULL,
ADD COLUMN     "issuingAgency" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "type" "documentType" NOT NULL,
ADD COLUMN     "validity" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "documents_userId_type_number_validity_issueDate_key" ON "documents"("userId", "type", "number", "validity", "issueDate");

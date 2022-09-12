/*
  Warnings:

  - You are about to drop the column `text` on the `cards` table. All the data in the column will be lost.
  - Added the required column `CardCVV` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CardExpiration` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CardPassword` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardName` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isVirtual` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "cardType" AS ENUM ('credit', 'debit', 'both');

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "text",
ADD COLUMN     "CardCVV" TEXT NOT NULL,
ADD COLUMN     "CardExpiration" TEXT NOT NULL,
ADD COLUMN     "CardPassword" TEXT NOT NULL,
ADD COLUMN     "cardName" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "isVirtual" BOOLEAN NOT NULL,
ADD COLUMN     "type" "cardType" NOT NULL;

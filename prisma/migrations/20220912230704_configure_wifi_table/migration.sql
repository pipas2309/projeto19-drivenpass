/*
  Warnings:

  - You are about to drop the column `text` on the `wifis` table. All the data in the column will be lost.
  - Added the required column `password` to the `wifis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wifi` to the `wifis` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "wifis_userId_title_key";

-- AlterTable
ALTER TABLE "wifis" DROP COLUMN "text",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "wifi" TEXT NOT NULL;

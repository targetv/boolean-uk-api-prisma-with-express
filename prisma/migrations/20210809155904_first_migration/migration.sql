/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Book";

-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "type" VARCHAR(250) NOT NULL,
    "author" VARCHAR(250) NOT NULL,
    "topic" VARCHAR(250) NOT NULL,
    "publicationData" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

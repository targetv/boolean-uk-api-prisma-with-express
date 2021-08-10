-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "type" VARCHAR(250) NOT NULL,
    "author" VARCHAR(250) NOT NULL,
    "topic" VARCHAR(250) NOT NULL,
    "publicationData" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

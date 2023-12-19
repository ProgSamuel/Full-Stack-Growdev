-- CreateTable
CREATE TABLE "criminosos" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "age" SMALLINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "criminosos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "description" VARCHAR(350) NOT NULL,
    "criminosoId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "crimeId" UUID NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_criminosoId_fkey" FOREIGN KEY ("criminosoId") REFERENCES "criminosos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_crimeId_fkey" FOREIGN KEY ("crimeId") REFERENCES "crimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

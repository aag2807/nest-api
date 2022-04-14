import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateAgain1649952636934 implements MigrationInterface {
  name = 'updateAgain1649952636934';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar NOT NULL, "content" varchar NOT NULL, CONSTRAINT "FK_48893c0ad32faf7bd0ea291f4e2" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "review"`,
    );
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_review" RENAME TO "review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar NOT NULL, CONSTRAINT "FK_23ef419ba59aeacac4daa0536c3" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "actor"`,
    );
    await queryRunner.query(`DROP TABLE "actor"`);
    await queryRunner.query(`ALTER TABLE "temporary_actor" RENAME TO "actor"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar NOT NULL, "content" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "review"`,
    );
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_review" RENAME TO "review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar, "content" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "review"`,
    );
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_review" RENAME TO "review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "actor"`,
    );
    await queryRunner.query(`DROP TABLE "actor"`);
    await queryRunner.query(`ALTER TABLE "temporary_actor" RENAME TO "actor"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "actor"`,
    );
    await queryRunner.query(`DROP TABLE "actor"`);
    await queryRunner.query(`ALTER TABLE "temporary_actor" RENAME TO "actor"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar, "content" varchar NOT NULL, CONSTRAINT "FK_48893c0ad32faf7bd0ea291f4e2" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "review"`,
    );
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_review" RENAME TO "review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar, CONSTRAINT "FK_23ef419ba59aeacac4daa0536c3" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "actor"`,
    );
    await queryRunner.query(`DROP TABLE "actor"`);
    await queryRunner.query(`ALTER TABLE "temporary_actor" RENAME TO "actor"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "actor" RENAME TO "temporary_actor"`);
    await queryRunner.query(
      `CREATE TABLE "actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar)`,
    );
    await queryRunner.query(
      `INSERT INTO "actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "temporary_actor"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_actor"`);
    await queryRunner.query(
      `ALTER TABLE "review" RENAME TO "temporary_review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar, "content" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "temporary_review"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_review"`);
    await queryRunner.query(`ALTER TABLE "actor" RENAME TO "temporary_actor"`);
    await queryRunner.query(
      `CREATE TABLE "actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "temporary_actor"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_actor"`);
    await queryRunner.query(`ALTER TABLE "actor" RENAME TO "temporary_actor"`);
    await queryRunner.query(
      `CREATE TABLE "actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar NOT NULL, CONSTRAINT "FK_23ef419ba59aeacac4daa0536c3" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "temporary_actor"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_actor"`);
    await queryRunner.query(
      `ALTER TABLE "review" RENAME TO "temporary_review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar NOT NULL, "content" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "temporary_review"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_review"`);
    await queryRunner.query(
      `ALTER TABLE "review" RENAME TO "temporary_review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar NOT NULL, "content" varchar NOT NULL, CONSTRAINT "FK_48893c0ad32faf7bd0ea291f4e2" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "temporary_review"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_review"`);
    await queryRunner.query(`ALTER TABLE "actor" RENAME TO "temporary_actor"`);
    await queryRunner.query(
      `CREATE TABLE "actor" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "dateOfBirth" datetime NOT NULL, "description" varchar NOT NULL, "trailerId" varchar NOT NULL, CONSTRAINT "FK_23ef419ba59aeacac4daa0536c3" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "actor"("id", "name", "dateOfBirth", "description", "trailerId") SELECT "id", "name", "dateOfBirth", "description", "trailerId" FROM "temporary_actor"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_actor"`);
    await queryRunner.query(
      `ALTER TABLE "review" RENAME TO "temporary_review"`,
    );
    await queryRunner.query(
      `CREATE TABLE "review" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "rating" varchar NOT NULL, "trailerId" varchar NOT NULL, "content" varchar NOT NULL, CONSTRAINT "FK_48893c0ad32faf7bd0ea291f4e2" FOREIGN KEY ("trailerId") REFERENCES "trailer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "review"("id", "title", "rating", "trailerId", "content") SELECT "id", "title", "rating", "trailerId", "content" FROM "temporary_review"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_review"`);
  }
}

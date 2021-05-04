import { TableColumn } from "typeorm/schema-builder/table/TableColumn";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserAddAvatar1618417693105 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({ name: "avatar", type: "varchar", isNullable: true })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "avatar");
  }
}

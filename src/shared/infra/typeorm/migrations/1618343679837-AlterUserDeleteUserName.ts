import { MigrationInterface, QueryRunner } from "typeorm";
import { TableColumn } from "typeorm/schema-builder/table/TableColumn";

export class AlterUserDeleteUserName1618343679837
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
      })
    );
  }
}

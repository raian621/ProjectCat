import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class DGuild {
  @PrimaryKey()
  id!: number;

  @Property({nullable: false})
  guildName!: string
}
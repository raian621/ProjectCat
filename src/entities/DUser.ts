import { Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class DUser {
  @PrimaryKey()
  id!: number;

  @Property()
  username!: string

  @OneToMany()
  guild!: DGuild;
}
import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { DGuild } from "./DGuild";

@Entity()
export class Project {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string

  @Property({nullable: true})
  dueDate?: Date;
  
  @Property({nullable: true})
  description?: string;
  
  @Property({nullable: false})
  createdAt = new Date();

  @Property({nullable: false})
  createdByUser!: string;

  @Property({nullable: false})
  createdById!: number;

  @ManyToOne()
  guild!: DGuild;
};
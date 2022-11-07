import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Project } from "./Project";

@Entity()
export class Stage {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string

  @Property({nullable: true})
  dueDate?: Date;
  
  @Property({nullable: true})
  description?: string

  @ManyToOne()
  project!: Project
  
  @Property({nullable: false})
  createdAt = new Date();

  @Property({nullable: false})
  createdByUser!: string;

  @Property({nullable: false})
  createdById!: number;
};
import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Stage } from "./Stage";

@Entity()
export class Task {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string

  @Property({nullable: true})
  dueDate?: Date;
  
  @Property({nullable: true})
  description?: string
  
  @ManyToOne()
  stage!: Stage

  @Property()
  createdAt = new Date();

  @Property({nullable: false})
  createdByUser!: string

  @Property({nullable: false})
  createdById!: number
}
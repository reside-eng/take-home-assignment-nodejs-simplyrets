import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  price: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  type: string;
}
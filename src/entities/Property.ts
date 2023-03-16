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

  @Column({ nullable: true })
  type: string;

  constructor(address: string, price: number, bedrooms: number, bathrooms: number, type: string) {
    this.address = address;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.type = type;
    this.id = 0; // initialize the id property
  }
}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

// Post - id ,title,text,image,likes ,createdAt,updatedAt

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  text: string;
  @Column()
  image: string;

  @Column()
  likes: number;

  @Column()
  createdAt = new Date();

  @Column()
  updatedAt = new Date();
}

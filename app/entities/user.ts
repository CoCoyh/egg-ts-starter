import { BaseEntity } from 'egg-ts-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export default class User extends BaseEntity {
  @Column()
  name: string;
  @Column()
  nickName: string;
}
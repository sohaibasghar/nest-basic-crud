import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('post_feed')
export class Feed {

@PrimaryGeneratedColumn('uuid')
id:string

@Column({nullable:false})
title:string

@CreateDateColumn()
createdAt:Date

@UpdateDateColumn()
updatedAt:Date

}

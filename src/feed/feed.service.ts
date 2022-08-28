import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private readonly feedRepository: Repository<Feed>
    ){}
  create(createFeedDto: CreateFeedDto):Promise<Feed> {
    return this.feedRepository.save(createFeedDto)
  }

  findAll():Promise<Feed[]> {
    return this.feedRepository.find()
  }

  findOne(id: string):Promise<Feed> {
    return this.feedRepository.findOne({where:{id}});
  }

}

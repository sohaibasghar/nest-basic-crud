import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      database:process.env.DB_NAME,
      host:process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      synchronize:true,
      autoLoadEntities:true

    }),
    FeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

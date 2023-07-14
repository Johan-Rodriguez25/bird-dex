import { Module } from '@nestjs/common';
import { BirdsController } from './birds.controller';
import { BirdsService } from './birds.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bird, BirdSchema } from './schemas/bird.schema';
import { BirdsRepository } from './birds.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bird.name, schema: BirdSchema }]),
  ],
  controllers: [BirdsController],
  providers: [BirdsService, BirdsRepository],
})
export class BirdsModule {}

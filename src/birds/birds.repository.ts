import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bird, BirdDocument } from './schemas/bird.schema';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Injectable()
export class BirdsRepository {
  constructor(
    @InjectModel(Bird.name)
    private birdModel: Model<BirdDocument>,
  ) {}

  async getAll(): Promise<Bird[]> {
    return await this.birdModel.find();
  }

  async getOne(id: string): Promise<Bird> {
    return await this.birdModel.findById(id);
  }

  async getByOrder(order: string): Promise<Bird[]> {
    const str = order;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ order_bird: regex });
  }

  async getByFamily(family: string): Promise<Bird[]> {
    const str = family;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ family_bird: regex });
  }

  async getByNameEnglish(name: string): Promise<Bird[]> {
    const str = name;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ name_english: regex });
  }

  async getByNameSpanish(name: string): Promise<Bird[]> {
    const str = name;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ name_spanish: regex });
  }

  async getByScientificName(name: string): Promise<Bird[]> {
    const str = name;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ scientific_name: regex });
  }

  async getByTypeEndemism(endemism: string): Promise<Bird[]> {
    const str = endemism;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ type_endemism: regex });
  }

  async getByTypeThreat(threat: string): Promise<Bird[]> {
    const str = threat;
    const regex = new RegExp(str, 'i');

    return await this.birdModel.find({ type_threat: regex });
  }

  async createOne(createBirdDto: CreateBirdDto): Promise<Bird> {
    return await new this.birdModel(createBirdDto).save();
  }

  async createMany(createBirdDto: CreateBirdDto[]): Promise<Bird[]> {
    return await this.birdModel.create(createBirdDto);
  }

  async updateOne(id: string, updateBirdDto: UpdateBirdDto): Promise<Bird> {
    return await this.birdModel.findByIdAndUpdate(id, updateBirdDto, {
      new: true,
    });
  }

  async removeOne(id: string): Promise<Bird> {
    return await this.birdModel.findByIdAndDelete(id);
  }
}

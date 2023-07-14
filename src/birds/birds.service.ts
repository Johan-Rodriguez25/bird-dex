import { Injectable } from '@nestjs/common';
import { BirdsRepository } from './birds.repository';
import { Bird } from './schemas/bird.schema';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Injectable()
export class BirdsService {
  constructor(private readonly birdsRepository: BirdsRepository) {}

  async getAll(): Promise<Bird[]> {
    return this.birdsRepository.getAll();
  }

  async getOne(id: string): Promise<Bird> {
    return this.birdsRepository.getOne(id);
  }

  async getByOrder(order: string): Promise<Bird[]> {
    return await this.birdsRepository.getByOrder(order);
  }

  async getByFamily(family: string): Promise<Bird[]> {
    return await this.birdsRepository.getByFamily(family);
  }

  async getByNameEnglish(name: string): Promise<Bird[]> {
    return this.birdsRepository.getByNameEnglish(name);
  }

  async getByNameSpanish(name: string): Promise<Bird[]> {
    return this.birdsRepository.getByNameSpanish(name);
  }

  async getByScientificName(name: string): Promise<Bird[]> {
    return this.birdsRepository.getByScientificName(name);
  }

  async getByTypeEndemism(endemism: string): Promise<Bird[]> {
    return this.birdsRepository.getByTypeEndemism(endemism);
  }

  async getByTypeThreat(threat: string): Promise<Bird[]> {
    return this.birdsRepository.getByTypeEndemism(threat);
  }

  async createOne(createBirdDto: CreateBirdDto): Promise<Bird> {
    return this.birdsRepository.createOne(createBirdDto);
  }

  async createMany(createBirdDto: CreateBirdDto[]): Promise<Bird[]> {
    return this.birdsRepository.createMany(createBirdDto);
  }

  async updateOne(id: string, updateBirdDto: UpdateBirdDto): Promise<Bird> {
    return this.birdsRepository.updateOne(id, updateBirdDto);
  }

  async removeOne(id: string): Promise<Bird> {
    return this.birdsRepository.removeOne(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { BirdsService } from './birds.service';
import { Bird } from './schemas/bird.schema';

@ApiBearerAuth()
@ApiTags('Birds')
@Controller('/api/v1/birds')
export class BirdsController {
  constructor(private birdsService: BirdsService) {}

  @Get()
  @ApiOkResponse({ description: 'The birds were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirds(): Promise<Bird[]> {
    return this.birdsService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The bird was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The bird was not found' })
  async getBird(@Param('id') id: string): Promise<Bird> {
    return this.birdsService.getOne(id);
  }

  @Get('/order/:order')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByOrder(@Param('order') order: string): Promise<Bird[]> {
    return this.birdsService.getByOrder(order);
  }

  @Get('/family/:family')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByFamily(@Param('family') family: string): Promise<Bird[]> {
    return this.birdsService.getByFamily(family);
  }

  @Get('/nameEnglish/:name')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByNameEnglish(@Param('name') name: string): Promise<Bird[]> {
    return this.birdsService.getByNameEnglish(name);
  }

  @Get('/nameSpanish/:name')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByNameSpanish(@Param('name') name: string): Promise<Bird[]> {
    return this.birdsService.getByNameSpanish(name);
  }

  @Get('/scientificName/:name')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByScientificName(@Param('name') name: string): Promise<Bird[]> {
    return this.birdsService.getByScientificName(name);
  }

  @Get('/typeEndemism/:endemism')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByTypeEndemism(
    @Param('endemism') endemism: string,
  ): Promise<Bird[]> {
    return this.birdsService.getByTypeEndemism(endemism);
  }

  @Get('/typeThreat/:threat')
  @ApiOkResponse({ description: 'The bird were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getBirdsByTypeThreat(@Param('threat') threat: string): Promise<Bird[]> {
    return this.birdsService.getByTypeThreat(threat);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The bird was created successfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async createBird(@Body() createBirdDto: CreateBirdDto): Promise<Bird> {
    return this.birdsService.createOne(createBirdDto);
  }

  @Post('/multipleBirds')
  @ApiCreatedResponse({ description: 'The birds were created successfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async createMultipleBirds(
    @Body() createBirdDto: CreateBirdDto[],
  ): Promise<Bird[]> {
    return this.birdsService.createMany(createBirdDto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'The bird was updated successfully' })
  @ApiNotFoundResponse({ description: 'The bird not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  async updateBird(
    @Param('id') id: string,
    @Body() updateBirdDto: UpdateBirdDto,
  ): Promise<Bird> {
    return this.birdsService.updateOne(id, updateBirdDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The bird was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The bird was not found' })
  async removeBird(@Param('id') id: string): Promise<Bird> {
    return this.birdsService.removeOne(id);
  }
}

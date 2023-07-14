import { ApiProperty } from '@nestjs/swagger/dist';
import { Transform } from 'class-transformer';

export class CreateBirdDto {
  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  order_bird: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  family_bird: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  name_english: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  name_spanish: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  scientific_name: string;

  @ApiProperty()
  @Transform(({ value }) => value.toUpperCase())
  type_endemism: string;

  @ApiProperty()
  @Transform(({ value }) => value.toUpperCase())
  type_threat: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  comment: string;
}

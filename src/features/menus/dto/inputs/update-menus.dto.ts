import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateMenusDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;

  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsBoolean()
  description!: string;

  @Field()
  @IsBoolean()
  price!: number;
}

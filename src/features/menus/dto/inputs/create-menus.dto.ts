import {Field, InputType} from '@nestjs/graphql';
import {IsNumber, IsString} from 'class-validator';

@InputType()
export class CreateMenusDto {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  description!: string;

  @Field()
  @IsNumber()
  price!: number;
}

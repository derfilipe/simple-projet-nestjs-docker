import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class GetMenusDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;
}

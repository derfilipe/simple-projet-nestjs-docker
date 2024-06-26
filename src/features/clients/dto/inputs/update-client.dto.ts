import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateClientDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id!: string;

  @Field()
  @IsString()
  content!: string;

  @Field()
  @IsBoolean()
  editing!: boolean;

  @Field()
  @IsBoolean()
  completed!: boolean;
}

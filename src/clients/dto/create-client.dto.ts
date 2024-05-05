import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from '../../common/Gender';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(300)
  name: string;

  @IsEnum(Gender, { message: 'Use a valid gender' })
  @IsNotEmpty()
  gender: Gender;
}

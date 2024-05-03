import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "../../common/Gender";

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(300)
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: Gender;
}

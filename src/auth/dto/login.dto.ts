import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

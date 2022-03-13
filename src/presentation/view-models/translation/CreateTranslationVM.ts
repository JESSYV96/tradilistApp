import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";
import { Translation } from "domain/models/Translation";

export class CreateTranslationVM {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Word or Expression to translate',
    example: 'Une voiture',
  })
  originLanguageText: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Word or Expression translated',
    example: 'A car',
  })
  targetLanguageText: string;

  static fromViewModel(vm: CreateTranslationVM): Translation {
    return new Translation(vm.originLanguageText, vm.targetLanguageText);
  }
}
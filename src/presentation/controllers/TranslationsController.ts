import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TranslationsUseCases } from "application/use-cases/TranslationsUseCases";
import { Translation } from "domain/models/Translation";
import { CreateTranslationVM } from "presentation/view-models/translation/CreateTranslationVM";

@ApiTags('Translation')
@Controller('translation')
export class TranslationsController {
    constructor(private readonly translationsUseCases: TranslationsUseCases)  {}

    @Get()
    async getTranslations(): Promise<Translation[]> {
        return this.translationsUseCases.getAllTranslations()
    }

    @Post()
    async createNewTranslation(@Body() createTranslationVM: CreateTranslationVM) {
        const newTranslation: Translation = CreateTranslationVM.fromViewModel(createTranslationVM)
        return this.translationsUseCases.createNewTranslation(newTranslation)
    }
}
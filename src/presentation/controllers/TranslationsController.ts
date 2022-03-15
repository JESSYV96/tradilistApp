import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { TranslationsUseCases } from "application/use-cases/TranslationsUseCases";
import { Translation } from "domain/models/Translation";
import { NotFoundError } from "presentation/errors/NotFoundError";
import { CreateTranslationVM } from "presentation/view-models/translation/CreateTranslationVM";

@ApiTags('Translation')
@Controller('translation')
export class TranslationsController {
    constructor(private readonly translationsUseCases: TranslationsUseCases) { }

    @Get()
    async getTranslations(): Promise<Translation[]> {
        return this.translationsUseCases.getAllTranslations()
    }

    @Post()
    async createNewTranslation(@Body() createTranslationVM: CreateTranslationVM) {
        const newTranslation: Translation = CreateTranslationVM.fromViewModel(createTranslationVM)
        return this.translationsUseCases.createNewTranslation(newTranslation)
    }

    @Delete(':translationId')
    @ApiParam({
        name: 'translationId',
        type: Number,
        description: 'The translation id',
    })
    @ApiOkResponse({ description: 'Translation deleted.' })
    @ApiNotFoundResponse({
        description: 'Translation not found.',
        type: NotFoundError
    })
    async removeTranslation(@Param('translationId') translationId: string): Promise<void> {
        await this.translationsUseCases.removeTranslation(parseInt(translationId, 10))
    }
}
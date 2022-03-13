import { Module } from '@nestjs/common';

import { ITranslationsRepository } from 'application/ports/ITranslationsRepository';
import { TranslationsUseCases } from 'application/use-cases/TranslationsUseCases';
import TranslationsRepository from 'infrastructure/database/repositories/TranslationRepository';
import { TranslationsController } from 'presentation/controllers/TranslationsController';

@Module({
	imports: [],
	controllers: [TranslationsController],
	providers: [
		TranslationsUseCases,
		{ provide: ITranslationsRepository, useClass: TranslationsRepository },
	],
})
export class TranslationsModule { }

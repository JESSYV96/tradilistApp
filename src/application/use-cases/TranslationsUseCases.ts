import { Injectable, NotFoundException } from "@nestjs/common";
import { ITranslationsRepository } from "application/ports/ITranslationsRepository";
import { Translation } from "domain/models/Translation";

@Injectable()
export class TranslationsUseCases {
  constructor(private readonly translationsRepository: ITranslationsRepository) { }

  async getAllTranslations(): Promise<Translation[]> {
    return await this.translationsRepository.find()
  }

  async createNewTranslation(translation: Translation): Promise<Translation> {
    try {
      return await this.translationsRepository.save(translation)
    } catch (error) {
      throw Error(error)
    }
  }

  async removeTranslation(translationId: number): Promise<void> {
    try {
      const translation: Translation = await this.translationsRepository.findOne(translationId)
      this.translationsRepository.delete(translation.id)
    } catch (error) {
      throw new NotFoundException(`The translation ${translationId} wasn't found.`);
    }
  }
}
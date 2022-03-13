import { Translation } from "domain/models/Translation"
import { BaseEntity } from './BaseEntity';
import { EntitySchema } from "typeorm";

export const TranslationEntity = new EntitySchema<Translation>({
    name: 'Translation',
    tableName: 'translations',
    target: Translation,
    columns: {
        ...BaseEntity,
        originLanguageText: {
            type: String,
        },
        targetLanguageText: {
            type: String
        }
    }
})
import { Injectable } from "@nestjs/common"
import { InjectConnection } from "@nestjs/typeorm";
import { ITranslationsRepository } from "application/ports/ITranslationsRepository"
import { Translation } from "domain/models/Translation"
import { Connection } from "typeorm";
import { TranslationEntity } from "../mapper/TranslationEntity";
import { BaseRepository } from "./BaseRepository"

@Injectable()
export default class TranslationsRepository extends BaseRepository<Translation>
    implements ITranslationsRepository {
    constructor(@InjectConnection() connection: Connection) {
        super(connection, TranslationEntity);
    }
}
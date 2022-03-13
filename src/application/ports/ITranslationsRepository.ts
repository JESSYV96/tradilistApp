import { Injectable } from "@nestjs/common";
import { Translation } from "domain/models/Translation";
import { IRepository } from "./IRepository";

@Injectable()
export abstract class ITranslationsRepository extends IRepository<Translation> { }
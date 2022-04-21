import { User } from "domain/models/User";
import { IEntity } from "domain/shared/IEntity";
import { Column, ManyToOne, PrimaryGeneratedColumn, Entity } from "typeorm";
// import { Language } from "../valueObject/Language";

export class Translation implements IEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    // @Column()
    // originLanguage: Language;

    // @Column()
    // targetLanguage: Language;

    @Column()
    originLanguageText: string;

    @Column()
    targetLanguageText: string;

    // @ManyToOne(type => User, user => user.id)
    // userId: string;

    constructor(originLanguageText: string, targetLanguageText: string) {
        this.originLanguageText = originLanguageText
        this.targetLanguageText = targetLanguageText
    }

    equals(entity: IEntity): boolean {
        if (!(entity instanceof Translation)) return false;

        return this.id === entity.id;
    }


}
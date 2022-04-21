import { Injectable, Post } from '@nestjs/common';
import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { User } from 'domain/models/User';


@Injectable()
export class UsersService {
    constructor(
        private readonly usersUseCase: UsersUseCases
    ) { };

    async create(user: User): Promise<User> {

        return await this.usersUseCase.createUser(user);
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        return this.usersUseCase.getUserByEmail(email);
    }
}
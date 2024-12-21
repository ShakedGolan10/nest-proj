import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    private readonly users = [
        {id: '1', name: 'jhon', email: 'jhon1@gmail.co'},
        {id: '2', name: 'doe', email: 'doe1@gmail.co'}
    ]

    async findAll() {
        return this.users
    }

    async findOne(id: string) {
        return this.users.filter(user => user.id === id)
    }
}
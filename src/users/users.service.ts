import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    username: string;
    password: string;
}

// Mock Data
const users: User[] = [
    {
        userId: 1,
        username: 'Jon',
        password: 'hashme'
    },
    {
        userId: 2,
        username: 'Bob',
        password: 'hashme2'
    },
];

@Injectable()
export class UsersService {
    async findUserByName(username: string): Promise<User | undefined> {
        return users.find((user) => user.username === username);
    }
}
 
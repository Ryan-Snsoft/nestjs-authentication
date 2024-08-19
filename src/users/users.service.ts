import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    phone: string;
    password: string;
}

// Mock Data
const users: User[] = [
    {
        userId: 1,
        phone: '12',
        password: 'hashme'
    },
    {
        userId: 2,
        phone: '123',
        password: 'hashme2'
    },
];

@Injectable()
export class UsersService {
    async findUserByPhone(phone: string): Promise<User | undefined> {
        return users.find((user) => user.phone === phone);
    }
}
 
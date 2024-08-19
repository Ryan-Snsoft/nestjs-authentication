import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

type AuthInput = { phone: string; password: string };
type SignInData = { userId: number; phone: string };
type AuthResult = { accessToken: string; userId: number; phone: string};

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ) {}

    async authenticate(input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException();
        }

        return this.signIn(user);
    }

    async validateUser(input: AuthInput): Promise<SignInData | null> {
        const user = await this.userService.findUserByPhone(input.phone)

        if (user && user.password === input.password) {
            return {
                userId: user.userId,
                phone: user.phone,
            };
        }

        return null;
    }

    async signIn(user: SignInData): Promise<AuthResult> {
        const tokenPayload = {
            sub: user.userId,
            phone: user.phone,
        }

        const accessToken = await this.jwtService.signAsync(tokenPayload);

        return { accessToken, phone: user.phone, userId: user.userId};
    }
}

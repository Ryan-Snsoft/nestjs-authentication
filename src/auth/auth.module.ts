import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './configs/jwt-secret-test';
import { PassportModule } from '@nestjs/passport';
import { PassportAuthController } from './passport-auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController, PassportAuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1h'}
    }),
    PassportModule
  ]
})
export class AuthModule {}

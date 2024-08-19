import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportAuthController } from './auth/passport-auth.controller';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController, PassportAuthController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SchoolsModule } from './schools/schools.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BotLinkModule } from './bot-link/bot-link.module';
import { ChannelLinkModule } from './channel-link/channel-link.module';
import { ChatLinkModule } from './chat-link/chat-link.module';
import { RedirectController } from './redirect.contoller';
import { FolderLinkModule } from './folder_link/folder_link.module';


@Module({
  imports: [
    SchoolsModule, 
    SubjectsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MulterModule.register({ dest: './uploads' }),
    UserModule,
    AuthModule,
    BotLinkModule,
    ChannelLinkModule,
    ChatLinkModule,
    FolderLinkModule,
  ],
  controllers: [RedirectController],
})
export class AppModule {}

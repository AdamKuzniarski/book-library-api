import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { Book } from './books/entities/book.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'], // API Routes werden nicht vom Static Server bedient
    }),
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://book_library_dxsz_user:bTtIR9NtmUIZVZogGlcQe2UtqNRPgfWS@dpg-d468earipnbc73bjf8p0-a.frankfurt-postgres.render.com/book_library_dxsz',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [Book, User],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

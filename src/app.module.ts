import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

import { Book } from './books/entities/book.entity';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://book_library_dxsz_user:bTtIR9NtmUIZVZogGlcQe2UtqNRPgfWS@dpg-d468earipnbc73bjf8p0-a.frankfurt-postgres.render.com/book_library_dxsz',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [Book],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

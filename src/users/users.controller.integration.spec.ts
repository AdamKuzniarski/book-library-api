import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { INestApplication } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import request from 'supertest';
import { CreateUserDto } from './dto/create-user.dto';

// für DB testing entweder testDb anlegen oder mocken
// sqlite, inMemoryDB oder testContainer

//------- SETUP -------

jest.setTimeout(100000); //erhöht timeout für container start
describe('UsersController', () => {
  let container: StartedPostgreSqlContainer;
  let app: INestApplication;
  //let controller: UsersController;

  beforeAll(async () => {
    container = await new PostgreSqlContainer('postgres:15-alpine').start();

    // ein Server für alle Anwendungen- bei Integrationstest
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          // config für postgres testContainer
          url: container.getConnectionUri(),
          type: 'postgres',
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    //Starts our nestJS application for our tests
    app = module.createNestApplication();
    await app.init();

    //controller = module.get<UsersController>(UsersController);
  });

  //------- TEST -------
  // request() "fetch für tests"
  it('when POST should respond with 201', async () => {
    const requestBody: CreateUserDto = {
      username: 'John Doe',
      email: 'ab@c.de',
      password: 'password123',
    };

    await request(app.getHttpServer())
      .post('/users')
      .send(requestBody)
      .expect((response) => {
        expect(response.status).toBe(201);
        expect((response.body as User).id).toBeDefined();
      });
  });
});

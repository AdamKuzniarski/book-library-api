import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    create: jest.fn((dto) => {
      return { ...dto, id: 'some-id' };
    }),
    update: jest.fn((id, dto) => {
      return { id, ...dto };
    }),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    expect(
      controller.create({
        username: 'Adam',
        email: 'adam@example.com',
        password: 'secret',
      }),
    ).toEqual({
      id: expect.any(String),
      username: 'Adam',
      email: 'adam@example.com',
      password: 'secret',
    });
  });

  it('should update a user', () => {
    const dto = {
      username: 'Adam',
      email: 'adam@example.com',
      password: 'secret',
    };
    expect(
      controller.update('some-id', {
        ...dto,
      }),
    ).toEqual({
      id: 'some-id',
      ...dto,
    });
    expect(mockUsersService.update).toHaveBeenCalled();
  });

  it('should disappear', () => {
    mockUsersService.delete.mockReturnValue({ id: 'some-id', deleted: true });
    const res = controller.remove('some-id');

    expect(res).toEqual({ id: 'some-id', deleted: true });
    expect(mockUsersService.delete).toHaveBeenCalledWith('some-id');
  });
});

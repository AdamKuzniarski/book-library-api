import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserAuth } from 'src/models/user.models';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<{
        id: string;
        username: string;
        email: string;
    } | UnauthorizedException>;
    login(user: UserAuth): {
        access_token: string;
    };
}

import { Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { UserPayload } from 'src/models/user.models';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: UserPayload): Promise<{
        userId: string;
        username: string;
    }>;
}
export {};

import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserDto } from './user.dto';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    users(): Promise<import(".prisma/client").User[]>;
    user(request: Request): Promise<any>;
    login(user: UserDto, response: Response): Promise<{
        message: string;
        user: UserDto;
        jwt: string;
    }>;
    register(user: UserDto): Promise<{
        message: string;
        user: import(".prisma/client").User;
    }>;
    delete(id: number): Promise<{
        message: string;
        user: import(".prisma/client").User;
    }>;
}

import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private prisma;
    private salt;
    constructor(prisma: PrismaService);
    users(): Promise<import(".prisma/client").User[]>;
    login(email: string): Promise<import(".prisma/client").User>;
    register(email: string, password: string): Promise<import(".prisma/client").User>;
    delete(id: number): Promise<import(".prisma/client").User>;
}

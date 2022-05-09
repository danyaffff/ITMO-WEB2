import { PrismaService } from '../prisma.service';
import { WorkPlace } from '@prisma/client';
import { WorkPlaceDto } from './workplace.dto';
export declare class MeService {
    private prisma;
    constructor(prisma: PrismaService);
    getWorkplaces(): Promise<WorkPlace[]>;
    addWorkplace(workplace: WorkPlaceDto): Promise<void>;
    deleteWorkplace(name: string): Promise<void>;
}

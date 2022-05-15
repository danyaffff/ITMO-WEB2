import { PrismaService } from '../prisma.service';
import { WorkPlace } from '@prisma/client';
import { WorkPlaceDto } from './workplace.dto';
export declare class MeService {
    private prisma;
    constructor(prisma: PrismaService);
    pageSize: number;
    getWorkplaces(page: number): Promise<WorkPlace[]>;
    addWorkplace(workplace: WorkPlaceDto): Promise<void>;
    deleteWorkplace(name: string): Promise<void>;
}

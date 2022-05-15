import { Response } from 'express';
import { MeService } from './me.service';
import { WorkPlaceDto } from './workplace.dto';
export declare class MeController {
    private meService;
    constructor(meService: MeService);
    showMe(response: Response, logged?: boolean, page?: number): void;
    getWorkplace(page?: number): Promise<import(".prisma/client").WorkPlace[]>;
    createWorkplace(workplace: WorkPlaceDto): void;
    deleteWorkplace(name: string): void;
}

import { Response } from 'express';
import { MeService } from './me.service';
import { WorkPlaceDto } from './workplace.dto';
export declare class MeController {
    private meService;
    constructor(meService: MeService);
    showMe(response: Response, logged?: boolean): void;
    createWorkplace(workplace: WorkPlaceDto): void;
    deleteWorkplace(name: string): void;
}

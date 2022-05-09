import { Response } from 'express';
import { IndexService } from './index.service';
import { WorkPlaceDto } from './workplace.dto';
export declare class IndexController {
    private indexService;
    constructor(indexService: IndexService);
    getIndex(response: Response): void;
    getIndexWithAuth(response: Response, logged: boolean): void;
    getTodo(): void;
    getUsers(): void;
    postWorkplace(workplace: WorkPlaceDto): void;
    deleteWorkplace(name: string): void;
}

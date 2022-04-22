import { MeService } from './me.service';
export declare class MeController {
    private meService;
    constructor(meService: MeService);
    getMeInformation(): void;
    addInformation(): void;
    delete(id: number): void;
}

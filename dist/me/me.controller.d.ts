import { MeService } from './me.service';
export declare class MeController {
    private meService;
    constructor(meService: MeService);
    getAllPosts(): void;
    addInformation(): void;
    delete(id: number): void;
}

import { Response } from 'express';
export declare class IndexController {
    getIndex(): void;
    getIndexWithAuth(response: Response, logged: boolean): void;
    getTodo(): void;
    getUsers(): void;
}

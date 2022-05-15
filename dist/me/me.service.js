"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeService = void 0;
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
let MeService = class MeService {
    constructor(prisma) {
        this.prisma = prisma;
        this.pageSize = 5;
    }
    async getWorkplaces(page) {
        if (!page || page < 0) {
            console.log('something went wrong:', page);
            return this.prisma.workPlace.findMany();
        }
        else {
            const skip = page * this.pageSize;
            const take = this.pageSize;
            console.log('page:', page, 'skip:', skip, 'take:', take);
            return this.prisma.workPlace.findMany({
                skip: skip,
                take: take,
                orderBy: {
                    id: 'asc'
                }
            });
        }
    }
    async addWorkplace(workplace) {
        console.log('sent:', workplace);
        this.prisma.workPlace
            .create({ data: workplace })
            .then((newWorkplace) => console.log('created:', newWorkplace));
    }
    async deleteWorkplace(name) {
        console.log('deleting:', name);
        this.prisma.workPlace
            .findFirst({
            where: { name: name },
        })
            .then((workplace) => {
            console.log('for delete:', workplace);
            return workplace;
        })
            .then((workplace) => {
            if (workplace != null) {
                this.prisma.workPlace
                    .delete({ where: { id: workplace.id } })
                    .then((workplace) => console.log('deleted:', workplace));
            }
        });
    }
};
MeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MeService);
exports.MeService = MeService;
//# sourceMappingURL=me.service.js.map
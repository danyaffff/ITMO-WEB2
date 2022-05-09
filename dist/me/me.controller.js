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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const me_service_1 = require("./me.service");
const swagger_1 = require("@nestjs/swagger");
let MeController = class MeController {
    constructor(meService) {
        this.meService = meService;
    }
    getAllPosts() {
        throw new common_1.NotImplementedException();
    }
    addInformation() {
        throw new common_1.NotImplementedException();
    }
    delete(id) {
        throw new common_1.NotImplementedException();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all posts',
    }),
    (0, swagger_1.ApiResponse)({
        status: 501,
        description: 'Not implemented',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MeController.prototype, "getAllPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Add a new information',
    }),
    (0, swagger_1.ApiResponse)({
        status: 501,
        description: 'Not implemented',
    }),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MeController.prototype, "addInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete information by id',
    }),
    (0, swagger_1.ApiResponse)({
        status: 501,
        description: 'Not implemented',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'int',
    }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "delete", null);
MeController = __decorate([
    (0, swagger_1.ApiTags)('Me'),
    (0, common_1.Controller)('me'),
    __metadata("design:paramtypes", [me_service_1.MeService])
], MeController);
exports.MeController = MeController;
//# sourceMappingURL=me.controller.js.map
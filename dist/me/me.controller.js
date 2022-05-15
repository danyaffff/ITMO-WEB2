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
const app_interceptor_1 = require("../app.interceptor");
const swagger_1 = require("@nestjs/swagger");
const me_service_1 = require("./me.service");
const workplace_dto_1 = require("./workplace.dto");
let MeController = class MeController {
    constructor(meService) {
        this.meService = meService;
    }
    showMe(response, logged = false, page = 0) {
        this.meService
            .getWorkplaces(page)
            .then((workplaces) => {
            console.log(workplaces);
            return workplaces;
        })
            .then((workplaces) => {
            console.log('workplaces:', workplaces);
            console.log('is logged:', logged);
            response.render('index', { workplaces: workplaces, logged: logged });
        });
    }
    async getWorkplace(page = 0) {
        const workplaces = await this.meService.getWorkplaces(page);
        return workplaces;
    }
    createWorkplace(workplace) {
        this.meService.addWorkplace(workplace);
    }
    deleteWorkplace(name) {
        if (name != null) {
            this.meService.deleteWorkplace(name);
        }
        else {
            throw new common_1.HttpException('name is incorrect', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get page about Danya',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'logged',
        type: 'boolean',
        required: false
    }),
    (0, swagger_1.ApiQuery)({
        description: 'Used to paginate Workplaces',
        name: 'page',
        type: 'number',
        required: false
    }),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('logged')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean, Object]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "showMe", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get workplaces',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Workplaces successfully received',
    }),
    (0, swagger_1.ApiQuery)({
        description: 'Used to paginate Workplaces',
        name: 'page',
        type: 'number',
        required: false
    }),
    (0, common_1.Get)('workplace'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "getWorkplace", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create new WorkPlace',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created successfully',
    }),
    (0, swagger_1.ApiBody)({
        type: workplace_dto_1.WorkPlaceDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Post)('workplace'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workplace_dto_1.WorkPlaceDto]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "createWorkplace", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete an existing WorkPlace',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'name',
        type: 'string',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Delete)('workplace'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "deleteWorkplace", null);
MeController = __decorate([
    (0, swagger_1.ApiTags)('Me'),
    (0, common_1.UseInterceptors)(new app_interceptor_1.LoggingInterceptor()),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [me_service_1.MeService])
], MeController);
exports.MeController = MeController;
//# sourceMappingURL=me.controller.js.map
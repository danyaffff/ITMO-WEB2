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
exports.IndexController = void 0;
const common_1 = require("@nestjs/common");
const app_interceptor_1 = require("../app.interceptor");
const swagger_1 = require("@nestjs/swagger");
const index_service_1 = require("./index.service");
const workplace_dto_1 = require("./workplace.dto");
let IndexController = class IndexController {
    constructor(indexService) {
        this.indexService = indexService;
    }
    getIndex(response) {
        this.indexService
            .getWorkplaces()
            .then((workplaces) => {
            console.log(workplaces);
            return workplaces;
        })
            .then((workplaces) => response.render('index', { workplaces: workplaces }));
    }
    getIndexWithAuth(response, logged) {
        console.log(logged);
        return response.render('index', { logged: logged });
    }
    getTodo() {
        return;
    }
    getUsers() {
        return;
    }
    postWorkplace(workplace) {
        this.indexService.addWorkplace(workplace);
    }
    deleteWorkplace(name) {
        if (name != null) {
            console.log('-=-=- name:', name);
            this.indexService.deleteWorkplace(name);
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
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "getIndex", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get index.hbs with authentication state',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Почему-то не работает :(',
    }),
    (0, swagger_1.ApiParam)({
        name: 'logged',
        type: 'boolean',
    }),
    (0, common_1.Get)('authy'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('logged', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "getIndexWithAuth", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get page where you can create TODO notes',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
    }),
    (0, common_1.Get)('todo'),
    (0, common_1.Render)('todo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "getTodo", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get page where you can load users',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
    }),
    (0, common_1.Get)('users'),
    (0, common_1.Render)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create new WorkPlace',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Continue',
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
], IndexController.prototype, "postWorkplace", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete an existing WorkPlace',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Continue',
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
], IndexController.prototype, "deleteWorkplace", null);
IndexController = __decorate([
    (0, swagger_1.ApiTags)('Index'),
    (0, common_1.UseInterceptors)(new app_interceptor_1.LoggingInterceptor()),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [index_service_1.IndexService])
], IndexController);
exports.IndexController = IndexController;
//# sourceMappingURL=index.controller.js.map
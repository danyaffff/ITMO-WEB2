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
let IndexController = class IndexController {
    getIndex() {
        return;
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
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get index.hbs',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
    }),
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
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
        description: '????????????-???? ???? ???????????????? :(',
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
IndexController = __decorate([
    (0, swagger_1.ApiTags)('Index'),
    (0, common_1.UseInterceptors)(new app_interceptor_1.LoggingInterceptor()),
    (0, common_1.Controller)()
], IndexController);
exports.IndexController = IndexController;
//# sourceMappingURL=app.index.controller.js.map
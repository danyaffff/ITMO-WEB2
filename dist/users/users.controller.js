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
exports.UsersController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_interceptor_1 = require("../app.interceptor");
let UsersController = class UsersController {
    showUsers() {
        return;
    }
};
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
], UsersController.prototype, "showUsers", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UseInterceptors)(new app_interceptor_1.LoggingInterceptor()),
    (0, common_1.Controller)()
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
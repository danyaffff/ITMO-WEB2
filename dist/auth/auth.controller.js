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
exports.AuthController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_interceptor_1 = require("../app.interceptor");
const auth_service_1 = require("./auth.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_dto_1 = require("./user.dto");
let AuthController = class AuthController {
    constructor(authService, jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }
    users() {
        return this.authService.users();
    }
    async user(request) {
        const jwt = request.cookies['jwt'];
        return await this.jwtService.verifyAsync(jwt);
    }
    async login(user, response) {
        let loggedUser = await this.authService.login(user.email);
        if (!loggedUser || !await bcrypt.compare(user.password, loggedUser.password)) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        const jwt = await this.jwtService.signAsync({ id: loggedUser.id });
        response.cookie('jwt', jwt, { httpOnly: true });
        return {
            message: 'User successfully login',
            user: user,
            jwt: jwt
        };
    }
    async register(user) {
        if (await this.authService.login(user.email)) {
            throw new common_1.BadRequestException('User already exists');
        }
        return {
            message: 'User successfully registered',
            user: await this.authService.register(user.email, user.password)
        };
    }
    async delete(id) {
        return {
            message: 'User successfully deleted',
            user: await this.authService.delete(id)
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all users stored in DataBase',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Users provided',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "users", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get user token information by token stored in cookies',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Information provided',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "user", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Found user from database and return if needed',
    }),
    (0, swagger_1.ApiBody)({
        type: user_dto_1.UserDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User logged in',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Register user and add it to DataBase',
    }),
    (0, swagger_1.ApiBody)({
        type: user_dto_1.UserDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete user from DataBase',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        type: 'number',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, common_1.Delete)('user'),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "delete", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.UseInterceptors)(new app_interceptor_1.LoggingInterceptor()),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const start = performance.now();
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            const response = context.switchToHttp().getResponse();
            const end = performance.now();
            console.log(end - start);
            response.cookie('server-loading-time', (end - start).toString());
            return data;
        }));
    }
};
LoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=app.interceptor.js.map
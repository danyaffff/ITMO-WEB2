import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const jwt = context.switchToHttp().getRequest().cookies['jwt'];
    console.log(jwt)
    return true;
  }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = performance.now();
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        const end = performance.now();
        console.log(end - start);
        response.cookie('server-loading-time', (end - start).toString());
        return data;
      }),
    );
  }
}

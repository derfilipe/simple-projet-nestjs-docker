import { Injectable, UseGuards } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome';
  }
}

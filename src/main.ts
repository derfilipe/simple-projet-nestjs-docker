import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const port = process.env.APP_PORT || 8000;
  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}/api/graphql`);
}

bootstrap();

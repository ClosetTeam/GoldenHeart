import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:5173', // Разрешить доступ с фронтенда (React)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Если используете cookies
  });
  await app.listen(process.env.PORT ?? 3000, () => console.log(`Server running on http://localhost:${process.env.PORT ?? 3000}/api`));
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); //cors: true para permitir que o front acesse o back
  //back vai rodar na 3005
  await app.listen(3005);
}
bootstrap();

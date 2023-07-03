import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SocketAdminService} from "./modules/admin/socket-admin.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: "*"})
  await app.listen(5001);
}
bootstrap();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [CatsModule, UsersModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

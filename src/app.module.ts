import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServic } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

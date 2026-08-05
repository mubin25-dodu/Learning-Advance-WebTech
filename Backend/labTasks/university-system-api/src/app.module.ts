import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrolementModule } from './enrolement/enrolement.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [CourseModule, EnrolementModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

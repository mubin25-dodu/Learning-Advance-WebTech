import { Module, forwardRef } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { CourseModule } from 'src/course/course.module';
import { EnrolementModule } from 'src/enrolement/enrolement.module';

@Module({
  imports: [CourseModule, forwardRef(() => EnrolementModule)],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}

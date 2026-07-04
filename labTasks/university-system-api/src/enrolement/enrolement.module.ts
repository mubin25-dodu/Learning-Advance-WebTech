import { Module , forwardRef} from '@nestjs/common';
import { EnrolementService } from './enrolement.service';
import { EnrolementController } from './enrolement.controller';
import { CourseModule } from 'src/course/course.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
   imports: [CourseModule , forwardRef(()=> NotificationModule) ],
  controllers: [EnrolementController],
  providers: [EnrolementService],
  exports: [EnrolementService],
})
export class EnrolementModule {}

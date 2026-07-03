import { Module , forwardRef} from '@nestjs/common';
import { EnrolementService } from './enrolement.service';
import { EnrolementController } from './enrolement.controller';
import { CourseModule } from 'src/course/course.module';

@Module({
   imports: [CourseModule , forwardRef(()=> EnrolementService)],
  controllers: [EnrolementController],
  providers: [EnrolementService],
})
export class EnrolementModule {}

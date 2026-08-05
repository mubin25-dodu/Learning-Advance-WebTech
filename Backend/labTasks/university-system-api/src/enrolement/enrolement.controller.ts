import { Controller , Get , Post , Body , Param } from '@nestjs/common';
import { EnrolementService } from './enrolement.service';
import { enrolement } from './DTO/enrolement.DTO';

@Controller('enrolement')
export class EnrolementController {
  constructor(private readonly enrolementService: EnrolementService) {}

  @Get()
  getEnrollments() {
    return this.enrolementService.getEnrollments();
  }

  @Post()
  enrollStudent(@Body() enrolement: enrolement) {
    console.log(`Enrolling student: ${enrolement.StudentName} in course: ${enrolement.CourseId}`);
    return this.enrolementService.enrollStudent(enrolement.StudentName, enrolement.CourseId);
  }
  
}

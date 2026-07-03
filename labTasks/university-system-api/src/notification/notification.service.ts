import { forwardRef , Inject, Injectable } from '@nestjs/common';
import { EnrolementService } from 'src/enrolement/enrolement.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class NotificationService {

    constructor( private courseService: CourseService, @Inject(forwardRef(()=> EnrolementService))
         private notificationService: NotificationService) {}

}

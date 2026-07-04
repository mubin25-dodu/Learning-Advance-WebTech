import { forwardRef , Inject, Injectable } from '@nestjs/common';
import { EnrolementService } from 'src/enrolement/enrolement.service';
import { CourseService } from 'src/course/course.service';
import { Notification } from './DTO/NotifiactionDTO';
import { NotificationcheckDTO } from './DTO/NotificationcheckDTO';



@Injectable()
export class NotificationService {

    constructor(@Inject(forwardRef(()=> EnrolementService)) private  enrolementService: EnrolementService) {}


    sendNotification(notification:Notification){  
        return `Notification send to -${notification.StudentName} - message - ${notification.message}`;
    }
    checkNotification(notificationcheck:NotificationcheckDTO){  
        return `Notification send to -${notificationcheck.StudentName} - id - ${notificationcheck.courseId}`;
    }
}

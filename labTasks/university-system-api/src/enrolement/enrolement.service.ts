import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrolementService {

    constructor(private CourseService:CourseService , @Inject(forwardRef(()=> NotificationService)) private notificationService:NotificationService){}

    enrollStudent( @Body() studentName: string, courseId: string){
        
       return this.CourseService.getCourseById(courseId) != null ? 
        this.notificationService.sendNotification({StudentName: studentName , message: `You have been enrolled in course ${courseId}`})
        :"Course Not Found";
    }    
    getEnrollments(){
        return this.CourseService.getAllcourse();
    }
}

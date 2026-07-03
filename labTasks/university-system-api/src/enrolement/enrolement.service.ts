import { Body, Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class EnrolementService {

    constructor(private CourseService:CourseService){}

    enrollStudent( @Body() studentName: string, courseId: string){
       return this.CourseService.getCourseById(courseId) != null ?  "Student Enroled Successfully" :"Course Not Found";
    }    
    getEnrollments(){
        return this.CourseService.getAllcourse();
    }
}

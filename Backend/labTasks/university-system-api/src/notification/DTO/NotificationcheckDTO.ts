import { IsNotEmpty ,Matches } from "class-validator";

export class NotificationcheckDTO{

    @IsNotEmpty()
    StudentName!:string;
    @Matches(/^[A-Z]{2,3}\d{3,4}$/ , {message: 'Course code must look like CS101 or CSE2002 (2-3 capital letters followed by 3-4 numbers).'} )
    courseId!:string;

}
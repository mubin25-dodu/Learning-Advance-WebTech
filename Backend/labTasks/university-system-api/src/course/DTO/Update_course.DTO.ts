import { PartialType } from '@nestjs/mapped-types'; 
import { courses } from './create-course.DTO';

export class UpdateCourseDTO extends PartialType(courses){}
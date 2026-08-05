import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}


@Get()
getallcourses(){
 return  this.courseService.getAllcourse()
}

@Get(':id')
getbyid(@Param('id') id:string){
 return  this.courseService.getAllcourse();
}
@Post()
createCourse(@Body() name:string , code:string){

  return this.courseService.createCourse(name,code);

}
}

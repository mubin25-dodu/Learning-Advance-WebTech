import { Body, Controller , Get, Param ,Patch,Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}


@Get()
getallcourse(){
  return this.courseService.getallcourse();
}

@Get(":courseId")
getbyid(@Param("courseId")id:number){
  console.log(id);
  return this.courseService.getbyid(id);
}
@Post()
creatcourse(@Body() course:any){
  console.log(course);
  return this.courseService.creatcourse(course);
}


}
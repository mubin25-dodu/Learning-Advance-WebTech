import { Body, Controller , Delete, Get, Param ,Patch,Post, Put } from '@nestjs/common';
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
  console.log(typeof course);
  return this.courseService.creatcourse(course);
}

@Put(":id")
UpdateCourse( @Param('id') id:any, @Body() course:any){
  console.log(course);
  console.log(id);
  return this.courseService.updatecourse(id , course);
}

@Patch(":id")
patchCourse( @Param('id') id:any, @Body() course:any){
  console.log(course);
  console.log(id);
  return this.courseService.Patchcourse(id , course);
}

@Delete(":id")
DeleteCourse( @Param('id') id:any){
  console.log(id);
  return this.courseService.DeteteCourse(id);
}

}
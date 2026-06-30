import { Body, Controller , Delete, Get, Param ,Patch,Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { courses } from './DTO/create-course.DTO';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}


@Get()
getallcourse():courses[]{
  return this.courseService.getallcourse();
}

@Get(":courseId")
getbyid(@Param("courseId")id:string){
  return this.courseService.getbyid(id);
}
@Post()
creatcourse(@Body() course:courses){
  console.log(course instanceof courses);
  return this.courseService.creatcourse(course);
}

@Put(":id")
UpdateCourse( @Param('id') id:string, @Body() course:courses){
  console.log(course);
  console.log(id);
  return this.courseService.updatecourse(id , course);
}

@Patch(":id")
patchCourse( @Param('id') id:string, @Body() course:courses){
  console.log(course);
  console.log(id);
  return this.courseService.Patchcourse(id , course);
}

@Delete(":id")
DeleteCourse( @Param('id') id:string){
  console.log(id);
  return this.courseService.DeteteCourse(id);
}

}
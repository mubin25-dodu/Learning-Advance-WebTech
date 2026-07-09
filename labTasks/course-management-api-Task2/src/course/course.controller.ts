import { BadRequestException, Body, Controller , Delete, Get, Param ,Patch,Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service';
import { courses } from './DTO/create-course.DTO';
import { FileInterceptor  } from '@nestjs/platform-express';
import { diskStorage , Multer } from 'multer';


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

@Post("upload")
@UseInterceptors(
  FileInterceptor('file' , {
    storage: diskStorage({
      destination: './uploads',
      filename: ( res , file , cb) =>{
        const filename = Date.now() + "-" + file.originalname;
        cb(null , filename);
      },
    }),
    fileFilter: (res , file ,cb) => {
      if(file.originalname.match(/^.*\.(jpg|jpeg|pdf|png)$/)){
        cb(null, true);
      }else{
        cb(new BadRequestException("Wrong file Formate") , false)
      }
    },
    
    limits:{
      fileSize : 2 * 1024 * 1024,
    }
  })
)
uploadfile(@UploadedFile() file: Multer.File){

  return { message :"file uploaded" ,
    filename: file.filename,
    path: file.path
  }
}

@Delete(":id")
DeleteCourse( @Param('id') id:string){
  console.log(id);
  return this.courseService.DeteteCourse(id);
}

}
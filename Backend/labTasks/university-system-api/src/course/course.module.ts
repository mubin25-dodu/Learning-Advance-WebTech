import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  controllers: [CourseController],
  providers: [CourseService , CourseService],
  exports:[ CourseService ],
})
export class CourseModule {}

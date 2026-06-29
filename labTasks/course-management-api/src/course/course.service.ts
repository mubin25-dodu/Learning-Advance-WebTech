import { Injectable } from '@nestjs/common';

var courses = [
    {
      "id": 1,
      "title": "Web Development with NestJS",
      "description": "Learn how to build APIs using NestJS, TypeScript, and PostgreSQL.",
      "category": "Backend",
      "level": "Intermediate",
      "durationHours": 32,
      "price": 180,
      "instructor": {
        "name": "Amina Rahman",
        "email": "amina.rahman@example.com",
        "experienceYears": 6
      },
      "modules": [
        {
          "moduleId": 101,
          "moduleTitle": "Getting Started",
          "lessons": [
            { "lessonId": 1001, "title": "Introduction to NestJS", "durationMinutes": 20 },
            { "lessonId": 1002, "title": "Project Setup", "durationMinutes": 25 }
          ]
        },
        {
          "moduleId": 102,
          "moduleTitle": "Controllers and Services",
          "lessons": [
            { "lessonId": 1003, "title": "Controllers", "durationMinutes": 30 },
            { "lessonId": 1004, "title": "Services", "durationMinutes": 35 }
          ]
        }
      ],
      "tags": ["nestjs", "typescript", "api", "backend"],
      "published": true
    },
    {
      "id": 2,
      "title": "Frontend Fundamentals",
      "description": "A beginner course on HTML, CSS, and JavaScript.",
      "category": "Frontend",
      "level": "Beginner",
      "durationHours": 24,
      "price": 120,
      "instructor": {
        "name": "Rahim Khan",
        "email": "rahim.khan@example.com",
        "experienceYears": 4
      },
      "modules": [
        {
          "moduleId": 201,
          "moduleTitle": "HTML Basics",
          "lessons": [
            { "lessonId": 2001, "title": "HTML Structure", "durationMinutes": 40 },
            { "lessonId": 2002, "title": "Forms and Inputs", "durationMinutes": 45 }
          ]
        },
        {
          "moduleId": 202,
          "moduleTitle": "CSS Essentials",
          "lessons": [
            { "lessonId": 2003, "title": "Selectors and Layout", "durationMinutes": 50 },
            { "lessonId": 2004, "title": "Flexbox and Grid", "durationMinutes": 55 }
          ]
        }
      ],
      "tags": ["html", "css", "javascript", "frontend"],
      "published": false
    }
  ];

@Injectable()
export class CourseService {

 getallcourse() {
  return courses;
 }

  getbyid(courseid:number) {
    return courses.find(course => course.id == courseid);
  }

  creatcourse(course){
    courses.push(course);
    return courses;
  }
  updatecourse(id:number, course:any){
    return "course Updated";
  }
  Patchcourse(id:number, course:any){
    return `course ${id} Patched`;
  }
  DeteteCourse(id:number){
    return `course ${id} Deleted`;
  }
}
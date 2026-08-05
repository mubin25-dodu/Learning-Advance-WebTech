import { IsNotEmpty , IsString , Matches} from "class-validator";


export class enrolement{
    @IsString()
    @IsNotEmpty({message:"Student name can not be Empty"})
    StudentName!: string;
    @IsNotEmpty({message:"Course Code can not be Empty"})
    @Matches(/^[A-Z]{2,3}\d{3,4}$/ , {message: 'Course code must look like CS101 or CSE2002 (2-3 capital letters followed by 3-4 numbers).'} )
    CourseId!: string;
}
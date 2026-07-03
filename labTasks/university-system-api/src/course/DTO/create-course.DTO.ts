
import { Type } from "class-transformer";
import { IsNotEmpty, Matches, Min , Max ,IsOptional} from "class-validator";

export class courses{
    @IsNotEmpty( {message:"Course name can not be Empty"})
    name!:string;
    @IsNotEmpty({message:"Course Code can not be Empty"})
    @Matches(/^[A-Z]{2,3}\d{3,4}$/ , {message: 'Course code must look like CS101 or CSE2002 (2-3 capital letters followed by 3-4 numbers).'} )
    code!:string;
    @IsNotEmpty({message:"Instructor name, cannot be empty "})
    instructor!:string;
    @Min(1,{message:"Between 1 and 6"})
    @Max(6,{message:"Between 1 and 6"})
    @Type(() => Number)
    credits!:number;
    @IsOptional()
    description!:string;
}
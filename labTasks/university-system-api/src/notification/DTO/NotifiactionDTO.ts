import { IsNotEmpty } from "class-validator";

export class Notification{

    @IsNotEmpty()
    StudentName!:string;
    @IsNotEmpty()
    message!:string;

}
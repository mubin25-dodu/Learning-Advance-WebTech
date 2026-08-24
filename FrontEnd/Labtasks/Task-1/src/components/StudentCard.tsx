import Coursetag from "./CourseTag"
interface students{
    name:string,
    id:number,
    avatar:string,
    gpa:number,
    major:string,
    enrolled:{
        name:string,
        color:string
    }[]
}

export default function Studentinfo(props:students){

    return(
    <>
    <div className="flex flex-col p-5 fap-2 border-2 border-gray-300 rounded-lg shadow-md m-5 w-[45%]"> 
       <div className="flex flex-row  justify-around items-center">
        <img className="w-32 h-32 rounded-full" src={`${props.avatar}`} alt="" />
        <span className="text-[40px]">Student Name: {props.name}</span>
        </div>
        <p>GPA: {props.gpa}</p>
        <p>Major: {props.major}</p>
        <span className={`flex flex-wrap gap-2 mt-2`}>
            {props.enrolled.map((course, index) => (
                <Coursetag key={index} {...course} />
            ))}
        </span>
    </div>
    </>
)
}
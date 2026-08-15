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
    <div className="flex flex-col p-5 border-2 border-gray-300 rounded-lg shadow-md m-5"> 
        <h1>Student Name: {props.name}</h1>
        <img className="w-32 h-32 rounded-full" src={`${props.avatar}`} alt="" />
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
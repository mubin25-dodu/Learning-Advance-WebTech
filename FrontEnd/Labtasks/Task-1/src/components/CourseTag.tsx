
interface props{
    name:string,
    color:string
}
export default function Coursetag(props:props){
console.log(props.color)
    return(
        <>
        <span className={`bg-[${props.color}] flex items-center justify-center p-2 rounded-full text-white font-bold w-fit`} style={{ backgroundColor: props.color }}>
            {props.name}
        </span>
        </>
    );

}
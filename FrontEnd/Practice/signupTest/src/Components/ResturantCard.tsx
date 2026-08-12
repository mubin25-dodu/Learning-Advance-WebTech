interface ResturantDetails {
    name: string;
    Email:string;
    Image:string;
}

export default function ResturantCard(props: ResturantDetails) {
    return (
    <>
    <div>UserName:{props.name}</div>
    <div>Email:{props.Email}</div>
    <img src={`C:/Users/Mubin/OneDrive - American International University-Bangladesh/uni/11 sem/advance webtech/DineSpace_backend/uploads/${props.Image}`} alt="" />
    </>

    )
}
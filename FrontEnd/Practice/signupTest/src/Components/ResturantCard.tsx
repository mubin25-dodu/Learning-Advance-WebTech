interface ResturantDetails {
    address: string;
    closing: string;
    createdat: string;
    id: string;
    isopen: boolean;
    opening: string;
    ownerid: string;
    payfirst: boolean;
    phone: string;
    resturantName: string;
    resturantemail: string;
    updated: string;
    Image?: string;
}

export default function ResturantCard(props: ResturantDetails) {
    return (
        <div className="border-8 flex flex-col ">
            <h2>{props.resturantName}</h2>
            <p>{props.resturantemail}</p>
            <p>{props.phone}</p>
            <p>{props.address}</p>
            <p>{props.isopen ? "Open now" : "Closed"}</p>
            <p>Hours: {props.opening} - {props.closing}</p>
            <p>Pay First: {props.payfirst ? "Yes" : "No"}</p>
            <p>Created: {new Date(props.createdat).toLocaleString()}</p>
            <p>Updated: {new Date(props.updated).toLocaleString()}</p>
            {props.Image && (
                <img
                    src={`C:/Users/Mubin/OneDrive - American International University-Bangladesh/uni/11 sem/advance webtech/DineSpace_backend/uploads/${props.Image}`}
                    alt={props.resturantName}
                />
            )}
        </div>
    );
}
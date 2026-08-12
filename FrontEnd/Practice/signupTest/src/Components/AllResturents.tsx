import axios from "axios"
import ResturantCard from "./ResturantCard";
import { useState } from "react";

export default function Resturants(){

    const [resdata, setResData] = useState<any>(null);
    const GetUsers = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}resturant/getAllResturants`);
        console.log(data);
        setResData(data);
    };

    return (
        <>
            <button type="button" onClick={GetUsers}>Get Resturants</button>
            <div>
                {resdata?.Data?.map((e: any) => (
                    <ResturantCard key={e.id} {...e} />
                ))}
            </div>
        </>
    );
}
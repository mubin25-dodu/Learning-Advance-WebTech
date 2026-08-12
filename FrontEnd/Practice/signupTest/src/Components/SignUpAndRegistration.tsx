import axios from "axios";
import { useState } from "react";

 function Authpage() {

    const [verifyEmail , setverifyEmail] = useState("");
    const handleLogin = async () => {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}auth/Verifyemail`,
                { email: verifyEmail }
            );
            console.log(data);
        } catch (e) {
            console.error("API error:", e);
        }
    }

    return (
        <>
        {/* main outerlayer */}
        <div className="bg-white w-[100vw] h-[100vh] flex items-center justify-center">
            
            {/* the contaainer */}
            <div className="bg- w-[50vw] h-[50vh] rounded-2xl flex " style={{boxShadow:'0px 0px 20px 1px'}}> 
                {/* slider */}
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-center w-[25vw] h-[50vh] text-black ml-auto" action="">
                    <div className=" flex items-start justify-center flex-col">
                        <div className="flex items-start flex-col">
                            <div className="items-start"><label  htmlFor="">Enter Email:</label></div>
                            <div><input className="border" type="email" name="" id="" /></div>
                        </div>
                        <div className="flex items-start flex-col">
                            <div className="items-start"><label  htmlFor="">Enter Password:</label></div>
                            <div><input className="border " type="password" name="" id="" /></div>
                        </div>
                        <span className="text-red disabled"></span>
                        <a className="text-red-800 cursor-pointer font-medium ">Forget Password?</a>
                        <button className="btn btn-neudival mt-2" type="submit">Login</button>
                    </div>
                </form>
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-center w-[25vw] h-[50vh] text-black ml-auto" action="">
                    <div className=" flex items-start justify-center flex-col">
                        <div className="flex items-start flex-col">
                            <div className="items-start"><label  htmlFor="">Enter Email:</label></div>
                            <div><input className="border" type="email" name="" id="VerifyEmail" value={verifyEmail} onChange={(e)=>setverifyEmail(e.target.value)} /></div>
                        </div>
                        <span className="text-red" id="emailerrorverify" ></span>
                        <button className="btn btn-neudival mt-2" type="submit" onClick={handleLogin}>Send mail</button>
                    </div>
                </form>

                {/* <div className="bg-blue-700 w-[25vw] h-[50vh]" style={{ borderRadius: '100px 16px 16px  ' }}></div> */}

            </div>
        </div>
        </>
    );
 }



 export default Authpage
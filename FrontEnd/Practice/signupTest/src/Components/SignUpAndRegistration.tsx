import axios from "axios";

 function Authpage() {
    return (
        <>
        {/* main outerlayer */}
        <div className="bg-white w-[100vw] h-[100vh] flex items-center justify-center">
            
            {/* the contaainer */}
            <div className="bg- w-[50vw] h-[50vh] rounded-2xl flex " style={{boxShadow:'0px 0px 20px 1px'}}> 
                {/* slider */}
                <form id="loginform" className="flex items-center justify-center w-[25vw] h-[50vh] text-black ml-auto" action="">
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
                <form id="loginform" className="flex items-center justify-center w-[25vw] h-[50vh] text-black ml-auto" action="">
                    <div className=" flex items-start justify-center flex-col">
                        <div className="flex items-start flex-col">
                            <div className="items-start"><label  htmlFor="">Enter Email:</label></div>
                            <div><input className="border" type="email" name="" id="VerifyEmail" /></div>
                        </div>
                        <span className="text-red" id="emailerrorverify"></span>
                        <button className="btn btn-neudival mt-2" type="button" onClick={()=>VerifyEmail()}>Send mail</button>
                    </div>
                </form>

                {/* <div className="bg-blue-700 w-[25vw] h-[50vh]" style={{ borderRadius: '100px 16px 16px  ' }}></div> */}

            </div>
        </div>
        </>
    );
 }

 async function VerifyEmail(){
    const emailInput = document.getElementById('VerifyEmail') as HTMLInputElement | null;
    const errorspan = document.getElementById('emailerrorverify') as HTMLInputElement | null;

    console.log(import.meta.env.VITE_HELLO);
    
    if (emailInput && emailInput.value) {
        console.log('Email entered:', emailInput.value);
        const getres = await axios.post(`${import.meta.env.VITE_API_URL}auth/Verifyemail` , emailInput.value);

        console.log(getres);
        
    } else {
        if (errorspan) { 
            errorspan.value = "";
            errorspan.textContent = 'Please enter your email';
        }
    }
 }

 export default Authpage
import { useState } from "react";
import signUpLogo from "../icons/signUpLogo.svg"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';



function SignUpTwo({register, setRegister}) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [mode, setMode] = useState(false);


    let changeState = (event)=>{
        const { name, value } = event.target;
        setRegister((prevData) => ({...prevData,[name]: value,}));
    }
    let changeMode = ()=>{
        setMode((prev)=>!prev)
    }
    let moveToStepThree = (event)=>{
        event.preventDefault()
        if(register.Password === register.confirmPassword) {
            navigate("/SignUP/SignUpThree")
            console.log((true));
            
        }
        else {
            setErrorMessage("The password is not matched")
        }
    }
    return (
        <div className="SignupTwo">
            <section className=" font-nunito">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className={`${mode ? 'bg-darkMode text-textWhite': 'bg-lightMode'} w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0`}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className={`${mode ? "text-textWhite" : ""} text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl`}>
                                Sig<img onClick={changeMode} src={signUpLogo} alt='noPhoto' className="inline cursor-pointer"/>up
                            </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="Email"
                                    className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                                >
                                    Email : 
                                </label>
                                <input
                                    type="email"
                                    name="Email"
                                    value={register.Email}
                                    id="Email"
                                    className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="ex@gmail.com"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="Phone"
                                    className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                                >
                                    Phone Number : 
                                </label>
                                <input
                                    type="number"
                                    name="Phone"
                                    value={register.Phone}
                                    id="Phone"
                                    className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="0987456321"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="Password"
                                    className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                                >
                                    Password :
                                </label>
                                <input
                                    type="password"
                                    name="Password"
                                    value={register.Password}
                                    id="Password"
                                    className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="*******"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                                >
                                    Confirm Password :
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={register.confirmPassword}
                                    id="confirmPassword"
                                    className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="*******"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div className="links flex justify-between">
                            <Link onClick={moveToStepThree} state={register}>
                                <div>
                                    <button
                                        type="button"
                                        className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none"
                                    >
                                        Next <ArrowForwardIcon/>
                                    </button>
                                </div>
                            </Link>
                            <Link to='/SignUP/SignUpOne'>
                                <button
                                    type="button"
                                    className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none">
                                    <ArrowBackIcon/> Previous
                                </button>
                            </Link>
                            </div>
                            <p className="text-red-500">{errorMessage}</p>
                            <div className="flex justify-end">
                                <p>Have an account already? <Link to="/"><span className="text-[#7C9ED9]">Login</span></Link></p>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUpTwo;

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import signUpLogo from "../icons/signUpLogo.svg"
import { Link } from 'react-router-dom';
import { useState } from 'react';


function SignUpOne({register, setRegister}) {
    let changeState = (event)=>{
        const { name, value } = event.target;
        setRegister((prevData) => ({...prevData,[name]: value,}));
    }
    const [mode, setMode] = useState(false);
    let changeMode = ()=>{
        setMode((prev)=>!prev)
    }
    return (
        <div className='SingupOne'>
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
                                htmlFor="FirstName"
                                className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                            >
                                First Name:
                            </label>
                            <input
                                type="text"
                                name="FirstName"
                                value={register.FirstName}
                                id="FirstName"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Bassam"
                                required=""
                                onChange={changeState}
                            />
                            </div>
                            <div>
                            <label
                                htmlFor="LastName"
                                className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                            >
                                Last Name :
                            </label>
                            <input
                                type="text"
                                name="LastName"
                                value={register.LastName}
                                id="LastName"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Kutet"
                                required=""
                                onChange={changeState}
                            />
                            </div>
                            <div>
                            <label
                                htmlFor="DOB"
                                className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                            >
                                Birth Date :
                            </label>
                            <input
                                type="date"
                                name="DOB"
                                value={register.DOB}
                                id="DOB"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                            />
                            </div>
                            <div>
                            <label className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}>
                                Gender :
                            </label>
                            <div className="flex">
                                <input
                                type="radio"
                                name="Gender"
                                value="Male"
                                checked={register.Gender === "Male" }
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                                />
                                <label>Male</label>
                                <input
                                type="radio"
                                name="Gender"
                                value="Femal"
                                checked={register.Gender === "Femal" }
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                                />
                                <label>Female</label>
                                <input
                                type="radio"
                                name="Gender"
                                value="Hidden"
                                checked={register.Gender === "Hidden" }
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                                />
                                <label>Hidden</label>
                            </div>
                            </div>
                            <Link to='/SignUP/SignUpTwo' state={register}>
                                <div className="mt-8 ">
                                    <button
                                        type="button"
                                        className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none"
                                    >
                                        Next <ArrowForwardIcon/>
                                    </button>
                                </div>
                            </Link>
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

export default SignUpOne;

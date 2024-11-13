import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import signUpLogo from "../icons/signUpLogo.svg"
import { Link } from 'react-router-dom';


function Signupone({register, setRegister}) {
    let changeState = (event)=>{
        const { name, value } = event.target;
        setRegister((prevData) => ({...prevData,[name]: value,}));
    }
    return (
        <div>
            <section className=" font-nunito">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#E7EDF9]">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sig<img src={signUpLogo} alt='noPhoto' className="inline"/>up
                            </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                            <label
                                htmlFor="firstName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                First Name:
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={register.firstName}
                                id="firstName"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Bassam"
                                required=""
                                onChange={changeState}
                            />
                            </div>
                            <div>
                            <label
                                htmlFor="firstName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last Name :
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={register.lastName}
                                id="lastName"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Kutet"
                                required=""
                                onChange={changeState}
                            />
                            </div>
                            <div>
                            <label
                                htmlFor="birthDate"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Birth Date :
                            </label>
                            <input
                                type="date"
                                name="birthDate"
                                value={register.birthDate}
                                id="birthDate"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                            />
                            </div>
                            <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Gender :
                            </label>
                            <div className="flex">
                                <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={register.gender === "Male" }
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                                />
                                <label>Male</label>
                                <input
                                type="radio"
                                name="gender"
                                value="Femal"
                                checked={register.gender === "Femal" }
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                                />
                                <label>Female</label>
                                <input
                                type="radio"
                                name="gender"
                                value="Hidden"
                                checked={register.gender === "Hidden" }
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={changeState}
                                />
                                <label>Hidden</label>
                            </div>
                            </div>
                            <Link to='/signUpTwo' state={register}>
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

export default Signupone;

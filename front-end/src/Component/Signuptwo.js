import signUpLogo from "../icons/signUpLogo.svg"
import { Link } from "react-router-dom";


function Signuptwo({register, setRegister}) {
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
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email : 
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={register.email}
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="ex@gmail.com"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Phone Number : 
                                </label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    value={register.phoneNumber}
                                    id="phoneNumber"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="0987456321"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password :
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={register.password}
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="*******"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm Password :
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={register.confirmPassword}
                                    id="confirmPassword"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="*******"
                                    required=""
                                    onChange={changeState}
                                />
                            </div>
                            {/* <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Role :
                                </label>
                                <div className="flex">
                                    <input
                                    type="radio"
                                    value="enterPrise"
                                    name="Role"
                                    className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    />
                                    <label>Enterprise</label>
                                    <input
                                    type="radio"
                                    value="personal"
                                    name="Role"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    />
                                    <label>personal</label>
                                </div>
                            </div> */}
                            <div className="mt-8 ">
                                <button
                                    type="button"
                                    className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none"
                                >
                                    Signup
                                </button>
                            </div>
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

export default Signuptwo;

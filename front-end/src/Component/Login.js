import logoBook from "../icons/logoBook.svg"
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <section className=" font-nunito">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#E7EDF9]">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            <img src={logoBook} alt='noPhoto' className="ml-8"/>
                                Login
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
                                id="email"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="ex@gmail.com"
                                required=""
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
                                id="password"
                                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="*****"
                                required=""
                            />
                            </div>
                            <div className="mt-8 ">
                                <button
                                    type="button"
                                    className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <p>Have no account?<Link to="/singUp"><span className="text-[#7C9ED9]">Signup</span></Link></p>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;

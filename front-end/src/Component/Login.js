import logoBook from "../icons/logoBook.svg"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
function LogIn() {
    let [loginData, setLoginData] = useState({
        Email: "",
        Password: ""
    })
    const [mode, setMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    let changeMode = ()=>{
        setMode((prev)=>!prev)
    }
    let changeState = (event)=>{
        const { name, value } = event.target;
        setLoginData((prevData) => ({...prevData,[name]: value,}));
    }
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/loginUser/loginPoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            const result = await response.json();
            if (!response.ok) {
                setErrorMessage(result.error);
            } else {
                console.log(result.id)
                sessionStorage.setItem("id", JSON.stringify(result.id))
                sessionStorage.setItem("role", JSON.stringify(result.Role))
                navigate("/Home/Main")
                setLoginData("")
                console.log('User Login successfully:', result.Success);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="Login">
            <section className=" font-nunito">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className={`${mode ? 'bg-darkMode text-textWhite': 'bg-lightMode'} w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0`}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className={`${mode ? "text-textWhite" : ""} text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl`}>
                                <img onClick={changeMode} src={logoBook} alt='noPhoto' className="inline cursor-pointer ml-8"/>
                                <p>Login</p>
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="">
                                <div>
                                    <label
                                        htmlFor="Email"
                                        className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="Email"
                                        value={loginData.Email}
                                        id="Email"
                                        className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Bassam"
                                        onChange={changeState}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="Password"
                                        className={`${mode ? "text-textWhite" : ""} block mb-2 text-sm font-medium`}
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="Password"
                                        value={loginData.Password}
                                        id="Password"
                                        className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#D9D9D9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Kutet"
                                        onChange={changeState}
                                    />
                                </div>
                            </form>
                            <p className="text-red-500">{errorMessage}</p>
                            <div className="mt-8" onClick={handleLogin}>
                                <button
                                    type="button"
                                    className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <p>Have an account already? <Link to="/SignUP/SignUpOne"><span className="text-[#7C9ED9]">Signup</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LogIn;

import React, { useState } from 'react';

function AddMemberForm() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        if (step === 1) {
            setStep(2);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }


        const payload = {
            FirstName: formData.firstName,
            LastName: formData.lastName,
            DOB: formData.dob,
            Gender: formData.gender,
            Email: formData.email,
            Phone: formData.phone,
            Password: formData.password,
            confirmPassword: formData.confirmPassword,
            
        };
        try {
            const currentUser = "67387ac5f5b86462be34d5b7"
            const response = await fetch(`http://localhost:5000/api/teams/add-member/${currentUser}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to add member');
            }

            const result = await response.json();
            console.log('Member added:', result);
            alert('Member added successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                dob: '',
                gender: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
            });
            setStep(1);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add member');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
            <div className="bg-[#e7edf9] dark:bg-gray-800 p-8 rounded-lg shadow-md w-80">
                <div className="flex items-center space-x-2 mb-4">
                    <span class="material-symbols-outlined dark:text-gray-200">
                        person_add
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Add Member</h2>
                </div>

                {step === 1 ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="firstName">First Name:</label>
                            <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  dark:text-gray-900" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  dark:text-gray-900" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="dob">Birth Date:</label>
                            <input type="date" name="dob" onChange={handleChange} value={formData.dob} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  dark:text-gray-900" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Gender:</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="Male" onChange={handleChange} className="text-blue-500 dark:text-blue-400 focus:ring-blue-500" /> <span className="ml-2 text-gray-700 dark:text-gray-300">Male</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="Female" onChange={handleChange} className="text-blue-500 dark:text-blue-400 focus:ring-blue-500" /> <span className="ml-2 text-gray-700 dark:text-gray-300">Female</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="Hidden" onChange={handleChange} className="text-blue-500 dark:text-blue-400 focus:ring-blue-500" /> <span className="ml-2 text-gray-700 dark:text-gray-300">Hidden</span>
                                </label>
                            </div>
                        </div>
                        <button type="button" onClick={handleNext} className="w-2/5 bg-[#7c9ed9] dark:bg-[#7c9ed9] text-white font-semibold py-1 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Next →</button>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email:</label>
                            <input type="email" name="email" onChange={handleChange} value={formData.email} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="phone">Phone Number:</label>
                            <input type="tel" name="phone" onChange={handleChange} value={formData.phone} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">Password:</label>
                            <input type="password" name="password" onChange={handleChange} value={formData.password} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900" required />
                        </div>
                        <div className="flex justify-start gap-5">
                            <button type="submit" className=" w-2/6 bg-[#7c9ed9] dark:bg-[#7c9ed9] text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Add</button>
                            <button type="button" onClick={() => setStep(1)} className="w-2/6 bg-white dark:bg-white text-gray-800 dark:text-gray-900 font-semibold py-2 px-4 rounded hover:bg-gray-400 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default AddMemberForm;

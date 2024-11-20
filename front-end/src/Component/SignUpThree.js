import Check from '@mui/icons-material/CheckRounded';
import signUpLogo from "../icons/signUpLogo.svg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function SignUpThree({register, setRegister}) {
    const navigate = useNavigate();
    const [TeamName, setTeamName] = useState('');
    const [mode, setMode] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleOpen1 = () => {
        setOpen1(true);
        setRegister({...register, Role: "personal"})
    }
    const handleOpen2 = () => {
        setOpen2(true)
    };
    const handleClose1 = () => setOpen1(false);
    const handleClose2 = () => setOpen2(false);
    let changeMode = ()=>{
        setMode((prev)=>!prev)
    }
    const handelRole = ()=>{
        setRegister({...register, Role: "manager"})
        setOpen2(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    let handelTeamName = (event)=>{
        setTeamName(event.target.value)
    }
    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/createUser/registerPoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({register, TeamName}),
            });
            const result = await response.json();
            if (!response.ok) {
                alert("registered failed")
                console.log(result.error)
            } else {
                navigate("/Register")
                setRegister("")
                console.log('User registered successfully:', result.user);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='flex flex-col gap-0px w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto font-nunito font-bold bg-[#E7EDF9] border-solid border-[2px] rounded-xl border-[#010B13]'>
                <div className={`${mode ? "bg-lightMode text-textDark" : "bg-darkMode text-textWhite"} w-full h-auto rounded-lg text-xl md:text-2xl rounded-b-none p-5 flex self-start justify-between`}>
                    Choose Your Plan
                    <img onClick={changeMode} src={signUpLogo} alt='no-pgoto' className='cursor-pointer'/>
                </div>
                <div className={`p-5 ${mode ? "bg-darkMode" : ""}`}>
                    <div className={` ${mode ? "bg-mixColor text-textWhite border-textWhite" : "border-[#010B13]"} p-3 flex flex-col mt-3 mx-3 md:mx-5 border-solid border-[0.5px] rounded-xl items-start`}>
                        <h1 className={`text-lg md:text-xl ${mode ? "text-textWhite": ""}`}>
                            Personal Plan
                        </h1>
                        <div className='bg-[#BCBCBC] text-xs md:text-sm text-[#010B13] w-fit h-fit px-3 py-[0.5] rounded-full'>Free</div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base'>Manage your daily tasks with just one click</span>
                        </div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base'>Put your favorite books and novels in one place</span>
                        </div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base'>Plan your travels easily</span>
                        </div>
                        <div className='self-end mt-4'>
                            <Button onClick={handleOpen1}>Continue</Button>
                            <Modal
                                open={open1}
                                onClose={handleClose1}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Your account is now personal
                                </Typography>
                                <input/>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Thank you for visiting our website! We appreciate your interest and support.
                                </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className='h-[0.5px] bg-[#010B13] mx-3 md:mx-5 mt-3'></div>
                    <div className={`${mode ? "bg-mixColor text-textWhite border-textWhite" : "border-[#010B13]"} p-3 flex flex-col mt-3 mx-3 md:mx-5 mb-10 border-solid border-[0.5px] rounded-xl items-start`}>
                        <h1 className={`text-lg md:text-xl ${mode ? "text-textWhite": ""}`}>
                            Enterprise Plan
                        </h1>
                        <div className='bg-[#F2F293] text-xs md:text-sm text-[#010B13] w-fit h-fit px-3 py-[0.5] rounded-full flex justify-center items-center'>
                            <span className='font-bold'> $50/Mon </span>
                        </div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base text-red-500'>Company Feature</span>
                        </div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base'>Manage your daily tasks with just one click</span>
                        </div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base'>Put your favorite books and novels in one place</span>
                        </div>
                        <div className='mt-2'>
                            <Check className='text-base md:text-lg' style={{stroke: '#010B13', strokeWidth: '1.5'}} /> <span className='text-sm md:text-base'>Plan your travels easily</span>
                        </div>
                        <div className='self-end mt-4'>
                            <Button onClick={handleOpen2}>Pay</Button>
                            <Modal
                                open={open2}
                                onClose={handleClose2}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Your account is now Maneger
                                </Typography>
                                <p className='mt-2'>Enter The Team Name: </p>
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="TeamName"
                                    name="TeamName"
                                    label="TeamName"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={TeamName}
                                    onChange={handelTeamName}
                                />
                                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                We want to extend our heartfelt thanks for your recent purchase of <span style={{color: "red"}}>Company Feature</span> on our website. We truly appreciate your support and are excited to have you as part of our community.
                                </Typography> */}
                                <button
                                onClick={handelRole}
                                type="button"
                                className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none">
                                Done
                                </button>
                                </Box>
                            </Modal>                  
                        </div>
                    </div>
                    <div className="links flex justify-between">
                        <div>
                            <button
                                onClick={handleRegister}
                                type="button"
                                className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none"
                            >
                                Signup
                            </button>
                        </div>
                        <Link to='/SignUP/SignUpTwo'>
                            <button
                                type="button"
                                className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#7C9ED9] hover:bg-blue-600 focus:outline-none">
                                <ArrowBackIcon/> Previous
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpThree;

import React, { useState, useEffect } from "react";
import van from '../icons/van.svg';
import squaredPlus from '../icons/squaredPlus.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import image from "../icons/travel.jpg";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function Travel() {
    let id = JSON.parse(sessionStorage.getItem("id"))
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/addTravel/getTravel/${id}`);
                const result = await response.json();
                setTravel(result)
                const newResult = result.map((element) => {
                    const isoDateString = element.Date; 
                    const dateObject = new Date(isoDateString);
                    const formattedDate = dateObject.toISOString().split('T')[0];
                    return {...element, Date: formattedDate}
                })
                setTravel(newResult)                
            } 
            catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(); 
    }, []);

    const [travel, setTravel] = useState([]);
    const [open, setOpen] = useState(false);
    const [openSave, setOpenSave] = useState(false);
    const [activeTripIndex, setActiveTripIndex] = useState(-1);    
    const [errorMessage, setErrorMessage] = useState("")
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };

    const addTripRow = () => {
        setTravel([...travel, { Place: '', Date: '', Needs: [] }]);
        const newIndex = travel.length; 
        setActiveTripIndex(newIndex);
    };

    const changeStateTrip = (index, event) => {
        const { name, value } = event.target;
        let tripsCopy = [...travel];
        tripsCopy[index][name] = value;
        setTravel(tripsCopy);
    };
    const [inputAddBelongings, setInputAddBelongings] = useState("")
    const changeInputAddBelongings = (event) =>{
        setInputAddBelongings(event.target.value)
    }
    const addBelongings = ()=>{
        travel[activeTripIndex].Needs.push(inputAddBelongings)
        setInputAddBelongings("")
    }
    const DrawerList = (
        <Box sx={{ width: '30vw' }} role="presentation">
            <div className='min-h-screen bg-[#E7EDF9] flex flex-col'>
                <div className="flex-grow flex flex-col gap-y-10 items-start justify-start p-10 font-nunito">
                    <h1 className="font-bold text-4xl">My Belongings</h1>
                    <div className="w-full">
                        {travel[activeTripIndex]?.Needs.map((element, index) => (
                            <div key={index} className=" bg-textBlue rounded-[12px] p-[10px] text-textWhite">{element}</div>
                        ))}
                    </div>
                    <div className='mt-auto mr-auto ml-auto items-center'>
                        <input value={inputAddBelongings} onChange={changeInputAddBelongings} type="text" className='bg-[#F8F8FF] duration-500 border-[#010B13] text-[#010B13] py-1 px-3 rounded-lg border-[2px] border-solid'/>
                        <button onClick={addBelongings} className='bg-[#7C9ED9] duration-500 text-[#F8F8FF] py-1 px-3 rounded-lg hover:bg-[#010B13] hover:text-[#fff]'>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </Box>
    );
    const handelSaveData = async()=>{
        setOpenSave(true)
        console.log(sessionStorage.getItem("id"));
        try {
            const response = await fetch('http://localhost:5000/api/addTravel/addTravelPoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({travel, id})
            });
            const result = await response.json();
            if (!response.ok) {
                console.log(result.Error)
                setErrorMessage(result.Error)
            } else {
                console.log('The Data Saved successfully:', result.Success);
                setErrorMessage(result.Success)
            }
        } catch (error) {
            console.error('Error:', error);
        }

        }
    return (
        <div className="min-h-screen bg-[#E7EDF9] font-nunito font-semibold">
            <img src={image} alt="no-photo" className="h-32 w-full overflow-hidden mb-4 object-cover" />
            <div className='flex flex-col items-start mx-5 md:mx-10 mt-10 gap-y-5'>
                <div className='flex gap-x-2 items-center'>
                    <img src={van} className='mt-1 w-7 h-7' alt='Van Icon' />
                    <h1 className='font-bold text-2xl md:text-4xl'>Traveling Planner</h1>
                </div>
                <div className='text-base md:text-lg'>Plan and organize your travels is a piece of cake!</div>
                <div className='rounded-lg font-bold text-lg md:text-xl '>
                    <Button className="p-2" onClick={handelSaveData} style={{backgroundColor: "#010B13"}}>
                        Save
                    </Button>
                    <Modal
                        aria-labelledby="modal-title"
                        aria-describedby="modal-desc"
                        open={openSave}
                        onClose={() => setOpenSave(false)}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Sheet
                        variant="outlined"
                        sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                        >
                        <ModalClose variant="plain" sx={{ m: 1}} />
                        <Typography
                            style={{width: "250px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px", color: "red"}}
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            sx={{ fontWeight: 'lg', mt: 1 }}
                        >
                            {errorMessage}
                        </Typography>
                        </Sheet>
                    </Modal>
                </div>
                <div className='overflow-x-auto'>
                    <table className="w-full border-[#B9B9B9] border-[2px] border-solid text-[#010B13]">
                        <thead className="bg-[#F0F0F0]">
                            <tr>
                                <th className="border-[#B9B9B9] border-[2px] border-solid p-2">Place</th>
                                <th className="border-[#B9B9B9] border-[2px] border-solid p-2">Date</th>
                                <th className="border-[#B9B9B9] border-[2px] border-solid p-2">My Belongings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {travel.map((trip, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type='text'
                                                name="Place"
                                                value={trip.Place}
                                                onChange={(event) => changeStateTrip(index, event)}
                                                className='w-full border-[#B9B9B9] border-[2px] p-2 border-solid rounded'
                                                placeholder="Add place"
                                                disabled ={activeTripIndex !== index}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type='date'
                                                name="Date"
                                                value={trip.Date}
                                                onChange={(event) => changeStateTrip(index, event)}
                                                className='w-full border-[#B9B9B9] border-[2px] p-2 border-solid rounded'
                                                disabled ={activeTripIndex !== index}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                disabled ={activeTripIndex !== index}
                                                className='w-full border-[#B9B9B9] border-[2px] p-2 border-solid rounded'
                                                onClick={() => {
                                                    setActiveTripIndex(index);
                                                    toggleDrawer();
                                                }}
                                            >
                                                {trip.Needs.join(" - ")}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center mt-[-12px]">
                        <button onClick={addTripRow}>
                            <img src={squaredPlus} alt='Squared Plus Icon' />
                        </button>
                    </div>
                </div>
            </div>
            <Drawer anchor='right' open={open} onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Travel;

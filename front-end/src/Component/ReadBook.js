import React, { useEffect, useState } from "react";
import image from "../icons/Book.svg";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import stoke from "../icons/stroke.svg";

import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

const ReadBook = () => {
    let id = JSON.parse(sessionStorage.getItem("id"));
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({});
    const [dropIndicator, setDropIndicator] = useState(null);
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const [openSave, setOpenSave] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/addBook/getBook/${id}`);
                const result = await response.json();
                // console.log(result);
                
                setBooks(result);
            } 
            catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(); 
    }, [id]);

    const handleAddNewBook = () => {
        setNewBook({ Author: "", Name: "", Status: "", Pages: "", Rating: "", Note: "" });
        toggleDrawer();
    };

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const addNewBookToBooks = () => {
        setBooks([...books, newBook]);
        setNewBook({ Author: "", Name: "", Status: "", Pages: "", Rating: "", Note: "" });
    };

    const handleDragStart = (e, bookId) => {
        e.dataTransfer.setData("text/plain", bookId);
    };

    const handleDragEnd = (e) => {
        e.dataTransfer.clearData();
        setDropIndicator(null);
    };

    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };

    const handleDrop = (e, status) => {
        e.preventDefault();
        const bookId = e.dataTransfer.getData("text/plain");
        const book = books.find((element) => element._id.toString() === bookId);
        console.log(book);
        

        if (book) {
            const updatedBook = { ...book, Status: status };
            setBooks((prevBooks) =>
                prevBooks.map((_book) => (_book._id.toString() === updatedBook._id.toString() ? updatedBook : _book))
            );
        }

        setDropIndicator(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDropIndicator(e.currentTarget.id);
    };

    const renderBooks = (status) => {
        return books
            .filter((element) => element.Status === status)
            .map((element)=>{
                return <div
                    key={element._id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, element._id.toString())}
                    onDragEnd={handleDragEnd}
                    className="w-full p-2 bg-gray-100 rounded"
                >
                    {element.Name}
                </div>
            });
    };

    const handelSaveData = async () => {
        setOpenSave(true)
        try {
            let response = await fetch('http://localhost:5000/api/addBook/addBookPoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ books, id })
            });
            const result = await response.json();
            if (!response.ok) {
                console.log(result.Error)
                setErrorMessage(result.Error)
            } else {
                console.log('The Data Saved successfully:', result.Success);
                setErrorMessage(result.Success)
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    const DrawerList = (
        <Box sx={{ width: '30vw' }} role="presentation">
            <div className="min-h-screen bg-[#E7EDF9] flex flex-col">
                <div className="flex-grow flex flex-col gap-y-10 items-start justify-start p-10 font-nunito">
                    <h1 className="font-bold text-4xl text-gray-800">Add a new Book to your library</h1>
                    <div className="font-bold flex flex-col gap-6">
                        <div>
                            <label className="block text-gray-700 mb-1">Author:</label>
                            <input value={newBook.Author} onChange={handleChangeInput} name="Author" type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Name:</label>
                            <input value={newBook.Name} onChange={handleChangeInput} name="Name" type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Status:</label>
                            <select value={newBook.Status} onChange={handleChangeInput} name="Status" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option hidden>Select Status</option>
                                <option value="Not Started">Not Started</option>
                                <option value="Reading">Reading</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 mb-1">Pages:</label>
                            <input value={newBook.Pages} onChange={handleChangeInput} name="Pages" type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 mb-1">Rating from 1 ---{">"} 5: </label>
                            <input value={newBook.Rating} onChange={handleChangeInput} name="Rating" type="number" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 mb-1">Note:</label>
                            <textarea value={newBook.Note} onChange={handleChangeInput} name="Note" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <button onClick={addNewBookToBooks} className="bg-[#7C9ED9] duration-500 text-[#F8F8FF] py-2 px-4 rounded-lg hover:bg-[#010B13] hover:text-[#fff]">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </Box>
    );

    return (
        <div className="min-h-screen bg-[#E7EDF9] font-nunito font-semibold">
            <div className="h-32 w-full overflow-hidden mb-4 object-cover">
                <img src={image} alt="no-photo" className="h-32 w-full overflow-hidden mb-4 object-cover" />
            </div>
            <div className='flex flex-col items-start mx-5 md:mx-10 mt-10 gap-y-5'>
                <div className='flex gap-x-2 items-center'>
                    <img src={stoke} className='mt-1 w-7 h-7' alt='Van Icon' />
                    <h1 className='font-bold text-2xl md:text-4xl'>Bookworm Zone</h1>
                </div>
                <div className='text-base md:text-lg'>All the books you care about are in one place now!</div>
                <div className="flex gap-5 w-full mb-10">
                    <button onClick={handleAddNewBook} className='w-[50%] text-white p-2 rounded' style={{ backgroundColor: "#010B13" }}>Add Books</button>
                    {/* <button onClick={saveData} className='w-full text-white p-2 rounded' style={{ backgroundColor: "#010B13" }}>Save</button> */}
                    <Button className="p-2 w-[50%]" onClick={handelSaveData} style={{backgroundColor: "#010B13"}}>
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
            </div>
            <div className="grid grid-cols-3 gap-2">
                <h2 className="text-center p-1 bg-[#BCBCBC] rounded-full text-[#F8F8FF]">Not Reading</h2>
                <h2 className="text-center p-1 bg-[#7C9ED9] rounded-full text-[#F8F8FF]">Reading</h2>
                <h2 className="text-center p-1 bg-[#bce275] rounded-full text-[#F8F8FF]">Completed</h2>
                <div
                    id="Not Started"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "Not Started")}
                    className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${dropIndicator === "Not Started" ? "bg-blue-100" : ""}`}
                >
                    {renderBooks("Not Started")}
                </div>

                <div
                    id="Reading"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "Reading")}
                    className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${dropIndicator === "Reading" ? "bg-blue-100" : ""}`}
                >
                    {renderBooks("Reading")}
                </div>

                <div
                    id="Completed"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "Completed")}
                    className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${dropIndicator === "Completed" ? "bg-blue-100" : ""}`}
                >
                    {renderBooks("Completed")}
                </div>
            </div>
            <Drawer anchor='right' open={open} onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default ReadBook;
import React from 'react'
import cover from '../../imgs/bg-cover-to-do.svg'

const Main = () => {

    return (
        <div>
            <div className='bg-cover w-full'>
                <img src={cover} className='w-full' />
            </div>

            <div className='To-Do'>
                <div className='flex flex-col m-40  placeholder:'>
                    <h1><span></span>To-Do-List</h1>
                    <p>Organizing your life hasn’t been easier:</p>
                    <div className='flex'>
                        <div className='card flex-col'>
                            <h2>Monday</h2>
                            <div className='flex flex-col'>
                                <ul className='list'>
                                    <li><input type='checkbox' />
                                        <label>Call Mark</label>
                                    </li>
                                    <li><input type='checkbox' />
                                        <label>Go Shopping</label>
                                    </li>
                                    <li><input type='checkbox' />
                                        <label>Cook Lunch</label>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button><span></span>Add Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
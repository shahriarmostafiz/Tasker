/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';

const Tasks = ({ filteredData, refetch, type }) => {
    return (
        // <div className='w-full  min-w-fit  p-2 overflow-y-auto max-h-full '>
        <div className='h-full w-full p-2 bg-gray-300 rounded space-y-4  max-h-screen min-w-80 overflow-y-scroll my-scroll '>
            <div className=' flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className={`p-4 ${type === "To Do" ? "bg-sky-600" : type === "Incomplete" ? "bg-red-500" : type === "Doing" ? "bg-yellow-500" : "bg-transparent px-1"} rounded-l-full`}>

                    </div>
                    <h1 className='text-slate-600 font-semibold text-lg'>
                        {type}
                    </h1>
                </div>
                <div className='bg-gray-500 px-2 py-1 rounded '>
                    0
                </div>

            </div>
            {
                filteredData.map(task => <Card key={task._id} id={task._id} counter={task?.counter} refetch={refetch} />)
            }

        </div>
    );
};

export default Tasks;
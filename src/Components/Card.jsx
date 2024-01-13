import React from 'react';
import { FaClipboardList, FaLayerGroup, FaRegComments } from "react-icons/fa";

import { FaRegCalendarDays } from "react-icons/fa6";
import Image from './Image';
import FileUpload from './Upload';


const Card = ({ counter, refetch }) => {
    return (
        <div className='bg-white rounded-md p-2 space-y-4 min-w-80'>
            {/* row 1  */}
            <div className='flex justify-between items-center w-full'>
                {/* info 1 */}
                <div className='flex gap-2 w-full items-center'>
                    <Image url={"https://i.ibb.co/rdb3fw5/user5.jpg"} />
                    <h1 className='font-medium text-slate-600'>Client Name</h1>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <Image url={"https://i.ibb.co/grG7MWH/user2.jpg"} />
                    <h1 className='font-medium text-slate-600'>Sadman Istiak</h1>

                </div>
            </div>
            {/* row 2 */}
            <div className='flex justify-between w-full'>
                <h1 className='flex-1 flex items-center text-sm gap-2'><FaLayerGroup size={12} /> Lorem ipsum dolor sit amet curn...</h1>
                <div className="bg-slate-300 flex items-center p-1 rounded gap-2"> <FaClipboardList size={16} /> <span>1/2</span></div>
            </div>
            <div className='flex gap-2 items-center'>
                <Image url={"https://i.ibb.co/BtgN6nh/user18.jpg"} />
                <Image url={"https://i.ibb.co/yfRrkwy/user11.jpg"} />
                <div className="rounded-full p-1 text-sm bg-gray-100 font-semibold ">12+</div>
                <h1 className='flex items-center gap-2'>
                    <FaRegComments size={12} /> 15
                </h1>
                <div className='flex gap-1 justify-center items-center '>

                    <FileUpload refetch={refetch} />

                    <h1 >  {counter ? counter : 0}</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <FaRegCalendarDays /> 30-12-2022
                </div>
            </div>

        </div>
    );
};

export default Card;
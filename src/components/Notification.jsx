import React, { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Notification(props) {

    const { isVisible, setVisible } = useState(false);

    return (
        <div>
            <div id='notificationDiv' className='bg-yellow-200 flex items-center rounded-xl min-w-[30vh] min-h-[5vh]'>
                <div className='flex w-full justify-between pl-4 pr-4'>
                    <h1 className='text-black font-semibold text-md text-sm'>{props.text}</h1>
                    <AiOutlineCloseCircle size={20} onClick={() => {
                        let notificationDiv = document.getElementById('notificationDiv');
                        notificationDiv.parentNode.removeChild(notificationDiv)
                    }} />
                    {(() => {
                        setTimeout(function () {
                            let notificationDiv = document.getElementById('notificationDiv');
                            if(notificationDiv && notificationDiv.parentNode){
                                notificationDiv.parentNode.removeChild(notificationDiv)
                            }
                        }, 4000);
                    })()}
                </div>
            </div>
        </div>
    )
}

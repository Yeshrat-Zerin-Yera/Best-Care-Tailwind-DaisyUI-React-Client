import React from 'react';
import ClockLoader from "react-spinners/ClockLoader";

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <ClockLoader color='#0FCFEC' size={150} />
        </div>
    );
};

export default Loading;
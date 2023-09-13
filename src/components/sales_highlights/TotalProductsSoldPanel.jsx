import React from 'react';

function TotalProductsSoldPanel({ totalProductsSold }) {
    return (
        <div className="flex items-center lg:block justify-between px-16 lg:px-8 bg-sky-400 text-white p-3 text-center sm:text-left rounded-lg">
            <div className='lg:text-center'>
            <i className="fa fa-shopping-cart fa-3x pb-1"></i>
            </div>
            <div className='pr-1 md:pr-4 lg:pr-0 lg:text-center'>
                <p className='font-bold text-lg'>{totalProductsSold}</p>
                <p className='font-semibold'>Total Products Sold</p>
            </div>
        </div>
    );
}

export default TotalProductsSoldPanel;
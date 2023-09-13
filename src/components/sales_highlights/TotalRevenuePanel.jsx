import React from 'react';

function TotalRevenuePanel({ totalRevenue }) {
  return (
    <div className="flex items-center lg:block justify-between px-16 lg:px-8 bg-fuchsia-400 text-white p-3 text-center sm:text-left rounded-lg">
      <div className='lg:text-center'>
        <i className="fa fa-dollar fa-3x pl-3 lg:pl-0"></i>
      </div>
      <div className='pr-6 md:pr-14 lg:pr-0 lg:text-center'>
      <p className='font-bold text-lg'>${totalRevenue}</p>
      <p className='font-semibold'>Total Revenue</p>
      </div>
      
    </div>
  );
}

export default TotalRevenuePanel;
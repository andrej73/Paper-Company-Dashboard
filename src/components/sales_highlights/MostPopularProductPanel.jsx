import React from 'react';

function MostPopularProductPanel({ mostPopularProduct }) {
  return (
    <div className="flex items-center lg:block justify-between px-16 lg:px-8 bg-amber-400 text-white p-3 text-center sm:text-left rounded-lg">
      <div className='lg:text-center'>
      <i className="fa fa-star fa-3x pl-1 lg:pl-0"></i>
      </div>
      <div className='lg:pr-0 lg:text-center'>
      <p className='font-bold text-lg'>{mostPopularProduct}</p>
      <p className='font-semibold'>Most Popular Product</p>
      </div>
      
    </div>
  );
}

export default MostPopularProductPanel;
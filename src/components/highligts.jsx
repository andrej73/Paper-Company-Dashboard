
import React from 'react';
import jsonData from '../data.json';
import { findMostPopular, sumTotalRevenue } from '../utils/salesHighlights.js';
import TotalProductsSoldPanel from './sales_highlights/TotalProductsSoldPanel';
import MostPopularProductPanel from './sales_highlights/MostPopularProductPanel';
import TotalRevenuePanel from './sales_highlights/TotalRevenuePanel';
import SalesRecords from './salesRecords';

function Highlights() {
    const totalProductsSold = jsonData.length
    const mostPopularProduct = findMostPopular(jsonData)
    const totalRevenue = sumTotalRevenue(jsonData)
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between xl:space-x-4'>
            <div className='lg:w-1/3 space-y-4 p-4 lg:p-8 lg:space-y-8'>
            <TotalProductsSoldPanel totalProductsSold={totalProductsSold} />
            <MostPopularProductPanel mostPopularProduct={mostPopularProduct} />
            <TotalRevenuePanel totalRevenue={totalRevenue} />
            </div>
            <div className='lg:w-2/3 px-4 lg:p-8'>
                <SalesRecords salesData={jsonData}/>
            </div>
        </div>
    )
}

export default Highlights;
import React, { useState, useEffect } from 'react';

function SalesRecords({ salesData }) {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [isFilterEnabled, setFilterEnabled] = useState(false)
    const [filteredSalesData, setFilteredSalesData] = useState([])

    // Sort by date, newest first
    const sortedSalesData = salesData.slice().sort((a, b) => {
        return new Date(b.dateSold) - new Date(a.dateSold)
    });

    useEffect(() => {
        setFilteredSalesData(sortedSalesData)
    }, []);

    const toggleFilterEnabled = () => {
        setFilterEnabled(!isFilterEnabled)
    };

    const handleStartDateChange = (event) => {
        event.preventDefault()
        const selectedStartDate = new Date(event.target.value)
        setStartDate(selectedStartDate)
    };

    const handleEndDateChange = (event) => {
        event.preventDefault()
        const selectedEndDate = new Date(event.target.value)
        setEndDate(selectedEndDate)
    };

    // Check if date range was picked, then update data array with filtered data. Otherwise keep the full initial list with all the data
    const filterSalesByDateRange = () => {
        if (startDate && endDate) {
            const filteredData = filteredSalesData.filter((sale) => {
                const saleDate = new Date(sale.dateSold)
                return saleDate >= startDate && saleDate <= endDate
            });
            setFilteredSalesData(filteredData)
        } else {
            setFilteredSalesData(sortedSalesData)
        }
    };

    return (
        <div className="bg-emerald-400 text-white p-3 rounded-lg">
            <div className='flex flex-col'>
                {/* Filter toggle switch and button */}
                <div className='flex justify-between items-center font-semibold'>
                    <p className='text-lg'>Recent Sales</p>
                    <div className='flex items-center space-x-2'>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" onChange={toggleFilterEnabled} class="sr-only peer" />
                            <div class="w-11 h-6 bg-emerald-600 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                        <button
                            className='text-base bg-emerald-600 rounded-lg px-1.5 py-1 uppercase disabled:bg-emerald-200'
                            disabled={!isFilterEnabled}
                            onClick={() => {
                                filterSalesByDateRange()
                            }}
                        >
                            Filter
                        </button>
                    </div>
                </div>
                {/* Date range picker */}
                {isFilterEnabled && (
                    <div className='flex space-x-2 md:space-x-4 font-semibold mt-1 md:mt-2'>
                        <div>
                            <label className='md:pr-2'>Start Date:</label>
                            <input type='date' id='startDate' className='bg-emerald-600 rounded-lg px-1' onChange={handleStartDateChange} />
                        </div>
                        <div>
                            <label className='md:pr-2'>End Date:</label>
                            <input type='date' id='endDate' className='bg-emerald-600 rounded-lg px-1' onChange={handleEndDateChange} />
                        </div>
                    </div>
                )}
            </div>
            {/* Recent Sales list. Mapping through filtered products from the selected date range */}
            <div className="max-h-96 overflow-y-scroll mt-1">
                <ul className='divide-y divide-white'>
                    {filteredSalesData.map((sale) => (
                        <li key={sale.id} className='grid grid-cols-6 py-1 items-center lg:font-semibold md:pr-2'>
                            <span className="col-span-3">{sale.productName}</span>
                            <span className="col-span-2">{sale.dateSold}</span>
                            <span className="col-span-1 text-right">${sale.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SalesRecords;
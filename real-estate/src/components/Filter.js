import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/24/outline';




function Filter() {
    const [togglehousing, setTogglehousing] = useState(false)
    const [toggleprice, setToggleprice] = useState(false)
    const [togglesorting, setTogglesorting] = useState(false)

    const housing = ["Apartment", "Building", "Summery", "Mansion", "Waterside", "Villa"]
    const pricing = ["500$ - 900$", "1000$ - 2000$", "2500$ - 300$", "3500$ - 4000$", "500+"]
    const sorting = ["Increasing Price", "Descending Price", "Most Current First", "Most Oldest First", "By Address (A-Z)"]




    function CloseOnOutsideClick(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setTogglehousing(false);
                    setToggleprice(false);
                    setTogglesorting(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {

                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    function ToggleHouse() {
        setTogglehousing(prev => !prev)
    }

    function SmartSorting() {
        setTogglesorting(prev => !prev)
    }
    function SortWithPricing() {
        setToggleprice(prev => !prev)
    }
    const closeRef = useRef(null);
    CloseOnOutsideClick(closeRef);

    return (
        <div className='bg-white h-[fit] py-4 lg:py-4 mt-6 lg:mt-12 px-2 lg:px-0 border lg:flex lg:justify-around relative z-50  '>

            <div className="filters flex items-center justify-start  gap-x-2 lg:gap-x-10">
                <div ref={closeRef} onClick={ToggleHouse} className="filter  px-2 lg:px-5 w-[120px] lg:w-[180px] hover:shadow-sm border py-3 rounded-md flex items-center justify-around lg:justify-between relative cursor-pointer">
                    <p className='text-[12px] lg:text-sm  '>Housing</p> <span className=' caret'>{togglehousing ? <ChevronDownIcon className='h-4 font-800 text-LtModTxtmdInp' /> : <ChevronUpIcon className='h-4 font-800 text-LtModTxtmdInp' />}</span>
                    <ul className={togglehousing ? 'absolute top-12 right-0 left-0 shadow-md bg-white rounded-md text-left text-sm ' : 'hidden'}>

                        {housing.map((house, index) => (
                            <li key={index} className="px-5 py-2 hover:bg-LtModTxtmdInp hover:bg-lime-500 duration-300 ease-in ">{house}</li>
                        ))}
                    </ul>
                </div>

                <div ref={closeRef} onClick={SortWithPricing} className="filter px-2 lg:px-5 w-[120px] lg:w-[180px] hover:shadow-sm border py-3 rounded-md flex items-center justify-around lg:justify-between relative cursor-pointer">
                    <p className='text-[12px] lg:text-sm  '>Pricing</p> <span className=' caret'>{toggleprice ? <ChevronDownIcon className='h-4 font-800 text-LtModTxtmdInp' /> : <ChevronUpIcon className='h-4 font-800 text-LtModTxtmdInp' />}</span>
                    <ul className={toggleprice ? 'absolute top-12 right-0 left-0 shadow-md bg-white rounded-md text-left text-sm ' : 'hidden'}>

                        {pricing.map((range, index) => (
                            <li key={index} className="px-5 py-2 hover:bg-LtModTxtmdInp hover:bg-lime-500 duration-300 ease-in ">{range}</li>
                        ))}
                    </ul>
                </div>

                <div ref={closeRef} onClick={SmartSorting} className="filter  px-1 lg:px-5 w-[120px] lg:w-[180px] hover:shadow-sm border py-3 rounded-md flex items-center justify-around lg:justify-between relative cursor-pointer">
                    <p className='text-[12px] lg:text-sm  '>Smart sorting</p> <span className=' caret'>{togglesorting ? <ChevronDownIcon className='h-4 font-800 text-LtModTxtmdInp' /> : <ChevronUpIcon className='h-4 font-800 text-LtModTxtmdInp' />}</span>
                    <ul className={togglesorting ? 'absolute top-12 right-0 left-0 shadow-md bg-white rounded-md text-left text-sm ' : 'hidden'}>

                        {sorting.map((sort, index) => (
                            <li key={index} className="px-5 py-2 hover:bg-LtModTxtmdInp hover:bg-lime-500 duration-300 ease-in ">{sort}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <FunnelIcon className='text-lime-500 w-6 funnel hidden lg:flex ml-4 cursor-pointer' />
        </div>
    )
}

export default Filter
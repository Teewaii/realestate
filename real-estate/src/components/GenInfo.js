import React from 'react'

function GenInfo() {
  return (
    <>
      <div className="gen-info-wrapper flex flex-col items-start bg-white mt-6 rounded-sm shadow-md h-fit py-4 px-6 border-gray-100 border-[0.3px]">
        <h1 className='text-left font-medium '>General Information</h1>
        <div className='flex items-center justify-between w-[100%]'>
          <div className="left-side flex gap-x-6 mt-3 ">
            <div className="obj flex flex-col items-start gap-y-2 text-gray-500 text-sm 2xl:text-md">
              <p>Listing id:</p>
              <p>Type:</p>
              <p>published Date:</p>
              <p>Purpose:</p>
              <p>Category:</p>
              <p>Available for viewing:</p>
            </div>

            <div className="values flex flex-col items-start gap-y-2 text-sm 2xl:text-md">
              <span>2555</span>
              <span> Flat</span>
              <span>2555</span>
              <span>For Rent</span>
              <span>Residential</span>
              <span>Available from 23rd Apr 2022</span>
            </div>

          </div>

          <div className="Right-side flex gap-x-6 mt-3 ">
            <div className="obj flex flex-col items-start gap-y-2 text-gray-500 text-sm 2xl:text-md">
              <p>Bed:</p>
              <p>Bath:</p>
              <p>Area:</p>
              <p>Furnished:</p>
              <p>Property Number:</p>
              <p>Address:</p>
            </div>

            <div className="values flex flex-col items-start gap-y-2 text-sm 2xl:text-md">
              <span>2</span>
              <span> 2</span>
              <span>2555</span>
              <span>Furnished</span>
              <span>52</span>
              <span>Headington, Oxford OX3</span>
            </div>

          </div>
        </div>
      </div>
      <div className="desc  bg-white mt-6 rounded-sm shadow-sm border-gray-100 border-[0.3px] h-fit py-4 px-6 ">
        <h1 className='font-medium text-left mb-2'>Description</h1>
        <p className='text-left text-sm 2xl:text-md text-gray-400'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
      </div>
    </>
  )
}

export default GenInfo
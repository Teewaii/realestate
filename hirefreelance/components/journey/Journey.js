
import { motion } from "framer-motion";

function Journey() {
    return (
        <section className='container py-8 h-fit '>
            <div className="journey-wrapper bg-journey bg-top bg-cover bg-no-repeat rounded-xl py-[70px]  relative overflow-hidden after:absolute after:bg-primary after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-[-1]
            flex flex-col items-center text-white shadow-xl
            ">
                <h1 className='text-2xl lg:text-4xl mb-8'>Journey of our Success</h1>
                <div className="item space-y-6 md:flex items-end justify-around w-[100%]  ">
                    <div className="manage flex flex-col items-center md:items-start">
                        <h1 className='text-4xl relative after:absolute after:left-0 after:right-[30%]  after:bottom-0 after:top-[92%] after:bg-white'>85%</h1>
                        <p className='text-white w-[180px] lg:w-[180px] text-center md:text-left leading-5 text-sm mt-2'>manage communication more efficiently</p>
                    </div>
                    <div className="improve flex flex-col items-center md:items-start">
                        <h1 className='text-4xl relative after:absolute after:left-0 after:right-[30%] after:bottom-0 after:top-[92%] after:bg-white'>95%</h1>
                        <p className='text-white w-[180px] lg:w-[180px] text-center md:text-left leading-5 text-sm mt-2'>improve communication with customers and clients</p>
                    </div>
                    <div className="average flex flex-col items-center md:items-start">
                        <h1 className='text-4xl relative after:absolute after:left-0 after:right-[30%] after:bottom-0 after:top-[92%] after:bg-white'>75%</h1>
                        <p className='text-white w-[180px] lg:w-[180px] text-center md:text-left leading-5 text-sm mt-2'>average improvement in team efficiency</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey
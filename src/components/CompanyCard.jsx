import React from 'react'

const CompanyCard = ({title, img, num}) => {
    return (
        <div className="bg-white w-[370px] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-200">
            {/* Company Logo */}
            <div className="flex items-center gap-2 mb-4">
                <img
                    src={`/icons/${img}.png`}
                    alt="Facebook"
                    className="w-12 h-12 rounded-full border border-gray-200"
                />
                {/* Job Details */}
                <div>
                    <h3 className='text-gray-800 font-semibold'>{title}</h3>
                    <p className='text-gray-500'>www.{img}.com</p>
                </div>
            </div>


            {/* Action Button */}
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-md shadow-md hover:bg-darkBlue transition-all duration-200">
                {num} Jobs Posted
            </button>
        </div>
    )
}

export default CompanyCard

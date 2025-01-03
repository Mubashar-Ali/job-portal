import React from 'react'
import Image from 'next/image'

const PostCard = ({ title, img }) => {
    return (
        <div className='text-gray-800 p-2 w-full md:w-[350px] border-gray-300 border rounded-lg'>
            <Image src={`/${img}.png`} alt='' width={50} height={50} />
            <h3 className='font-semibold pt-2'>{title}</h3>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia, reiciendis maiores debitis, quaerat necessitatibus non sunt mollitia omnis, sapiente itaque provident commodi hic. Harum incidunt fuga asperiores vel quas.</p>
        </div>
    )
}

export default PostCard

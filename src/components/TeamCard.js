import Image from 'next/image'
import React from 'react'

function TeamCard({name,image}) {
  return (
    <div className='rounded-[7.5px] bg-[#E8F4FD] flex'>
        <div className='flex gap-2 flex-col w-[228px] py-4 px-6'>
            <Image
                src={image}
                width={97}
                height={105}
                alt='team'
            />
            <h2 className='text-center text-[#0F1629] font-semibold text-sm'>{name}</h2>
            <p className='text-center text-[#788F9B] font-medium text-xs'>Designation here</p>
        </div>
        <div className='flex items-center'>
            <h3 className='font-normal text-sm text-[#0F1629]'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. 
            Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. 
            Consectetur proin amet ut id facilisi quis consectetur. 
            Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</h3>
        </div>
    </div>
  )
}

export default TeamCard
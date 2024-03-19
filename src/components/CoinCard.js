import Image from 'next/image'
import React from 'react'

function CoinCard({ logo, code, percent, value }) {
  return (
    <div className='border border-[#E3E3E3] rounded-[10px] lg:w-[352px] lg:h-[160px] p-5'>
      <div className='flex items-center gap-3 mb-3'>
        <Image
          src={logo}
          width={26}
          height={26}
          alt='logo'
        />
        <div className='flex items-center'>
          <h2>{code}</h2>
          <div className={`${percent < 0 ? 'bg-[#E96975] text-[#7c3329]' : 'bg-[#91ccb9] text-[#32BE88]'}  text-xs font-normal rounded-[2px] p-1`}>
            {percent > 0 ? '+' : ''}{percent}%
          </div>
        </div>
      </div>
      <h2 className='text-[#171717] text-xl font-medium'>{value}</h2>
      <div className=''>
        {percent > 0 ? 
          <Image 
            src='/assets/trend.png'
            width={142}
            height={61}
            alt='logo'
          /> 
          : 
          <Image 
            src='/assets/trend-red.png'
            width={142}
            height={61}
            alt='logo'
          />
        }
        
      </div>
    </div>
  )
}

export default CoinCard
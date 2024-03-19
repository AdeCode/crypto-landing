import React from 'react'
import CoinCard from '../CoinCard'
import { coinData } from '@/constants/coinData'
import { trendingCoinData } from '@/constants/trendingCoin'



function Footer() {
  return (
    <div className='flex py-14 px-8 bg-white flex-col'>
      <h2 className='text-[#202020] text-2xl font-semibold mb-5'>You May Also Like</h2>
      <div className='flex gap-7 mb-6'>
        {
            coinData.map((coin, index) => (
                <CoinCard
                    logo={coin.logo}
                    code={coin.code}
                    percent={coin.percent}
                    value={coin.value}
                    key={index}
                />
            ))
        }
      </div>
      <h2 className='text-[#202020] text-2xl font-semibold mb-5'>Trending Coins</h2>
      <div className='flex  gap-7'>
        {
            trendingCoinData.map((coin, index) => (
                <CoinCard
                    logo={coin.logo}
                    code={coin.code}
                    percent={coin.percent}
                    value={coin.value}
                    key={index}
                />
            ))
        }
      </div>
        
    </div>
  )
}

export default Footer
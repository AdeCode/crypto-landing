import React from 'react'
import TeamCard from './TeamCard'
import { teamData } from '@/constants/teamData'
import DistributionChart from './DistributionChart'

function Tokenomics() {
    return (
        <div className='bg-white p-4 rounded-e-lg mb-10 mt-5'>
            <div className=''>
                <h2 className='text-[#0F1629] text-2xl font-semibold mb-4'>Tokenomics</h2>
                <p className='text-[#1D1D1D] font-semibold text-xl'>Initial Distribution</p>
            </div>
            <div className='flex'>
                <div className='w-[30%]'>
                <DistributionChart/>
                </div>
            </div>
            <p className='text-[#3E424A] text-base font-medium'>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. 
            Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. 
            Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam 
            donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. 
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>

        </div>
    )
}

export default Tokenomics
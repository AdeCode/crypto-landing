import React from 'react'
import TeamCard from './TeamCard'
import { teamData } from '@/constants/teamData'

function Team() {
    return (
        <div className='bg-white p-4 rounded-e-lg mb-10 mt-5'>
            <div className=''>
                <h2 className='text-[#0F1629] text-2xl font-semibold mb-4'>Team</h2>
                <p className='text-[#3E424A] text-base font-medium mb-5'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh.
                    Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    teamData.map((team, index) => (
                        <TeamCard
                            key={index}
                            name={team.name}
                            image={team.image}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Team
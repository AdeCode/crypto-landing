import Link from 'next/link'
import React, { useState } from 'react'

const tabs = [
    { label: 'Overview', content: 'Content for Tab 1', url:'http' },
    { label: 'Fundamentals', content: 'Content for Tab 2' },
    { label: 'News Insights', content: 'Content for Tab 3', url:'/insights' },
    { label: 'Sentiments', content: 'Content for Tab 3', url:'#sentiment', },
    { label: 'Team', content: 'Content for Tab 3' },
    { label: 'Technicals', content: 'Content for Tab 3' },
    { label: 'Tokenomics', content: 'Content for Tab 3' },
]

function CustomTab() {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index) => {
        setActiveTab(index)
    }
    console.log(activeTab)
  return (
    <div className='flex items-center gap-12 border-b-2 border-[#D3E0E6] my-4'>
        {
            tabs.map((tab, index)=> (
                <div className={`${activeTab === index ? 'border-b-4 border-[#0141CF] py-2' : ''} cursor-pointer`} key={index} onClick={()=>handleTabClick(index)}>
                    {tab.href ? 
                        <Link href={tab.href}>
                            <h3 className={`${activeTab === index ? 'text-[#0141CF]' : '#3E424A'} text-base font-medium`}>{tab.label}</h3>
                        </Link>
                        :
                        <h3 className={`${activeTab === index ? 'text-[#0141CF]' : '#3E424A'} text-base font-medium`}>{tab.label}</h3>
                    }
                    
                </div>
            ))
        }
    </div>
  )
}

export default CustomTab
import React, { useState } from 'react'
import Logo from '../../assets/svgs/logo'
import Link from 'next/link'
import Hambugger from '../../assets/svgs/hambugger'

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [active, setActive] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        setActive(!active)
    }

    return (
        <div className='flex justify-between bg-white h-[80px] items-center px-6'>
            <Logo />
            <ul className='hidden lg:flex justify-between gap-8 items-center'>
                <li className='text-[#0F1629] text-base font-semibold'>
                    <Link href="/">Crypto Taxes</Link>
                </li>
                <li className='text-[#0F1629] text-base font-semibold'>
                    <Link href="/">Free Tools</Link>
                </li>
                <li className='text-[#0F1629] text-base font-semibold'>
                    <Link href="/">Resource Center</Link>
                </li>
                <button className='bg-[#2870EA] rounded-lg p-2 text-white w-[136px]'>Get Started</button>
            </ul>
            <div className='lg:hidden z-10' onClick={toggleMobileMenu}>
                <Hambugger />
            </div>
            {
                mobileMenu &&
                <ul className='flex flex-col absolute top-6 left-0 w-full h-screen bg-white px-4'>
                    <li className='text-[#0F1629] text-base font-semibold'>
                        <Link href="/">Crypto Taxes</Link>
                    </li>
                    <li className='text-[#0F1629] text-base font-semibold'>
                        <Link href="/">Crypto Taxes</Link>
                    </li>
                    <li className='text-[#0F1629] text-base font-semibold'>
                        <Link href="/">Crypto Taxes</Link>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Navbar
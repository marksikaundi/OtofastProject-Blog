import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profileImg from '@/public/profile-img.png'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
        <div className='w-16 mr-4 rounded-full overflow-hidden border-dark border border-solid '>
            <Image
            src={profileImg} 
            alt='Otofast Org'
            className='w-full h-auto rounded-full'
             />
        </div>
        <span className='font-bold text-xl'>fastOrg</span>
    </Link>
  )
}

export default Logo

import React from 'react'
import Link from 'next/link'

const Download = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div>
      <Link href='/ ' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </div>
  )
}

export default Download

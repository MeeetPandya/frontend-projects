import React from 'react'
import { Button } from './ui/button'

export const Cnav = () => {
  return (
    <div><nav className='flex flex-row justify-between py-2 m-2'>
    <h1>My courses</h1>
    <ul className=''>
    <Button className='mx-1 font-semibold rounded-lg bg-customDark text-customLight'>All courses</Button>
    <Button className='mx-1 font-semibold rounded-lg bg-customLight text-customDark border-2 border-customGray'>Marketing</Button>
    <Button className='mx-1 font-semibold rounded-lg bg-customLight text-customDark border-2 border-customGray'>Computer Science</Button>
    <Button className='mx-1 font-semibold rounded-lg bg-customLight text-customDark border-2 border-customGray'>Psychology</Button>
    </ul>
  </nav></div>
  )
}

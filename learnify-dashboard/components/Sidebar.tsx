import { Bookmark, BookMarked, Folder, Grid2X2, Headphones, LayoutGrid, LogOut, Settings, ShoppingBag, SquarePen } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <div className="flex left-0 top-0 w- flex-col w-16 py-8 h-screen text-customLight">
       
    <ul className='flex flex-col justify-center items-center space-y-8 py-14 '>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
          <LayoutGrid size={20} />
      </Link>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
          <Folder size={20} />
      </Link>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
          <SquarePen size={20} />
      </Link>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
          <ShoppingBag size={20} />
      </Link>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
          <LayoutGrid size={20} />
      </Link>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
          <BookMarked size={20} />
      </Link>
    </ul>
     
    <ul className='flex flex-col justify-center items-center space-y-12 py-12 '>
    <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
      <Headphones size={20}/>
      </Link>
      <Link href="/" className="p-3 rounded-xl hover:bg-customYellowDark">
      <Settings size={20}/>
      </Link>
    </ul>

    <div className='m-auto bottom-0'>
    <button className='hover:bg-customYellow p-3 rounded-xl'>
      <LogOut size={20}/>
    </button>
    </div>

    </div>
  )
}

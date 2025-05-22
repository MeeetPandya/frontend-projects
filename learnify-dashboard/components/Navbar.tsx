import Link from "next/link"
import { Input } from "./ui/input"
import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const Navbar = () => {
  return (
    <div>{/* Navbar */}
     <nav className="flex flex-row justify-between h-fit w-full mt-2">
        <Link href={'./'} className='flex items-center gap-2'>
          <span className="text-customDark text-opacity-50 text-base pt-1">Welcome to</span>
          <span className="text-xl font-semibold text-customOrange">Learn<span className="text-customDark">ify</span></span>
        </Link>

      <div className='flex justify-center items-center space-x-5 '>
        <div className='border-2 border-customGray flex flex-row justify-center items-center rounded-lg px-1'>
          <Input type='search' placeholder='Search...' className="bg-customLight" />
          <Search size={16} className='size-fit p-2 bg-customOrange rounded-md text-customLight'/>
        </div>
      
          <Bell size={16} className=' ml-8 size-fit p-2 rounded-full border-2 border-customGray'/>
          <Avatar> 
            <AvatarImage src='./pfp.jpeg'/>
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>

          <div className='text-sm'>
            <p className='text-customDark text-base'>Stitch B</p>
            <p className='text-customDark text-sm text-opacity-75'>@Stitch_bhanushali</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

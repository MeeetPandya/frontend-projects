import Link from "next/link"
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Bookmark } from "lucide-react"
import { Progress } from "./ui/progress"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"

export const Cards = () => {
  return (
    <main>
       {/* Content */}
       <div className='flex pt-4 justify-between'>
          
          {/* card1 */}
          <div className='bg-customYellowLight border-2 text-customDark border-customGray m-2 w-1/3 rounded-3xl'> 
            <CardHeader className='flex flex-row justify-between'>
              <Badge className='bg-customDark rounded-lg text-customLight w-max'>
                Marketing
              </Badge>
            <Bookmark />
            </CardHeader>
            <CardTitle className='px-6'>
              Creative Writing for Beginners
              
            </CardTitle>
            <CardContent className='w-full'>
              <ul className='flex flex-row justify-between pt-4 w-full'>
                <p>Progress</p>
                <p>5/20 Lessons</p>
              </ul>
              <Progress value={25} className='bg-customYellowDark'/>
            </CardContent>
  
  
            <CardFooter className='flex justify-between'>
  
              {/* people */}
              <div className='flex flex-row'>
            <Avatar className='border-2 border-customGray'> 
              <AvatarImage src='./pfp.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarImage src='./pfp2.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarImage src='./pfp3.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarFallback className='text-xs bg-customDark text-customLight'>+120</AvatarFallback>
              </Avatar>
            </div>
  
            <Button className='bg-customOrange text-customLight rounded-xl'>Continue</Button>
  
            </CardFooter>
          </div>
  
           {/* card2 */}
           <div className='bg-customPurple border-2 text-customDark border-customGray m-2 w-1/3 rounded-3xl'> 
           <CardHeader className='flex flex-row justify-between'>
              <Badge className='bg-customYellow rounded-lg text-customDark border-2 border-customGray w-max'>
                Computer Science
              </Badge>
            <Bookmark />
            </CardHeader>
            <CardTitle  className='px-6'>
              Digital Illustration with Adobe Illustrator
              </CardTitle>
            <CardContent className='w-full'>
              <ul className='flex flex-row justify-between pt-4 w-full'>
                <p>Progress</p>
                <p>12/50 Lessons</p>
              </ul>
              <Progress value={24} className='bg-customPupleDark'/>
            </CardContent>
  
          <CardFooter className='flex justify-between'>
  
              {/* people */}
              <div className='flex flex-row'>
            <Avatar className='border-2 border-customGray'> 
              <AvatarImage src='./pfp.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarImage src='./pfp2.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarImage src='./pfp3.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarFallback className='text-xs bg-customYellow text-customLight'>+80</AvatarFallback>
              </Avatar>
            </div>
  
            <Button className='bg-customOrange text-customLight rounded-xl'>Continue</Button>
  
            </CardFooter>          
          </div>
  
          {/* card3 */}
          <div className='bg-customBlue border-2 text-customDark border-customGray m-2 w-1/3 rounded-3xl'> 
          <CardHeader className='flex flex-row justify-between'>
              <Badge className='bg-customPurple rounded-lg text-customDark border-2 border-customGray w-max'>
                Psychology
              </Badge>
            <Bookmark />
            </CardHeader>
            <CardTitle  className='px-6'>
              Public Speaking and Leadership
            </CardTitle>
            <CardContent className='w-full'>
              <ul className='flex flex-row justify-between pt-4 w-full'>
                <p>Progress</p>
                <p>18/22 Lessons</p>
              </ul>
              <Progress value={82} className='bg-customBlueDark'/>
            </CardContent>
  
            <CardFooter className='flex justify-between'>
  
              {/* people */}
              <div className='flex flex-row'>
            <Avatar className='border-2 border-customGray'> 
              <AvatarImage src='./pfp.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarImage src='./pfp2.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarImage src='./pfp3.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray'> 
              <AvatarFallback className='text-xs bg-customPurple text-customLight'>+24</AvatarFallback>
              </Avatar>
            </div>
  
            <Button className='bg-customOrange rounded-xl text-customLight'>Continue</Button>
  
            </CardFooter>
          </div>
     
        </div>

        
    </main>
  )
}

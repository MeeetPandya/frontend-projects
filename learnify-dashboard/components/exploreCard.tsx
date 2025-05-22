import { CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

export function Carde(){
  return (
    <div className='bg-customGray flex flex-col m-2 w-1/3 rounded-2xl border-2 border-customDark'>
        <CardHeader className=' text-customLight opacity-80'>New course matching your interests</CardHeader>
        <Badge className='bg-customYellow text-md text-customDark hover:text-customYellowLight w-fit rounded-lg p-2 ml-6 mb-2'>Computer Science</Badge>
        <CardTitle className='text-md text-customLight ml-6 mt-4 text-3xl'>
            Microsoft Future Ready: Fundamentals of Big Data
        </CardTitle>
        <CardContent className='pt-8'>
            <span className='text-customLight text-xl opacity-85'>They are already studying</span>
            {/* people */}
            <div className='flex flex-row'>
            <Avatar className='border-2 border-customGray size-16'> 
              <AvatarImage src='./pfp.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray size-16'> 
              <AvatarImage src='./pfp2.jpeg'/>
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray size-16'> 
              <AvatarImage src='./pfp3.jpeg' />
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
  
            <Avatar className='-ml-4 border-2 border-customGray size-16'> 
              <AvatarFallback className='text-base bg-customYellow text-customDark'>+100</AvatarFallback>
              </Avatar>
            </div>
        </CardContent>

        <CardFooter>
            <Button className='text-customLight bg-customOrange w-full'>
                More Details
            </Button>
        </CardFooter>
    </div>
  )
};

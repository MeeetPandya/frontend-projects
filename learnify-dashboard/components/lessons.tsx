import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

interface Lesson{
    id: string
    title: string
    course: string
    tutor:{
        name: string
        avatar: string
    }
    duration: string
}

interface LessonListProps{
    lessons: Lesson[]
}

export function LessonList({lessons}: LessonListProps){
    return(
        <div className="border-2 border-customGray rounded-2xl p-2 m-2 w-2/3 bg-white">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-customDark">My Next Lessons</h1>
                <button className="text-customOrange text-sm border-none bg-white">View all Lessons</button>
            </div>
            <div className="text-sm pt-2 text-customGray opacity-80 justify-between items-center flex ">
                <span>Lesson</span>
                <span className="ml-64">Tutor</span>
                <span>Duration</span>
            </div>
            <div>
                {lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between py-4 border-b">
                        <div>
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-lg text-customDark opacity-80">{lesson.course}</div>
                        </div>
                        <div className="flex items-center ">
                            <Avatar>
                                <AvatarImage src={lesson.tutor.avatar} />
                                <AvatarFallback>{lesson.tutor.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-lg">{lesson.tutor.name}</span>
                        </div>
                        <span className="text-lg text-customDark">{lesson.duration}</span>
                    </div>
                ))};
            </div>
        </div>
    )
};
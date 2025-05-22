import { Cards } from '@/components/Cards';
import { Cnav } from '@/components/courseNavigator';
import { LessonList } from '@/components/lessons';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Carde } from '@/components/exploreCard';

const lessons = [
  {
    id: "1",
    title: "01. Introduction to Creative Writing",
    course: "Creative writing for beginners",
    tutor: {
      name: "Connor Garcia",
      avatar: "/placeholder.svg",
    },
    duration: "22 min",
  },

  {
    id: "1",
    title: "01. Introduction to Creative Writing",
    course: "Creative writing for beginners",
    tutor: {
      name: "Connor Garcia",
      avatar: "/placeholder.svg",
    },
    duration: "22 min",
  },

  {
    id: "1",
    title: "01. Introduction to Creative Writing",
    course: "Creative writing for beginners",
    tutor: {
      name: "Connor Garcia",
      avatar: "/placeholder.svg",
    },
    duration: "22 min",
  },
  {
    id: "1",
    title: "01. Introduction to Creative Writing",
    course: "Creative writing for beginners",
    tutor: {
      name: "Connor Garcia",
      avatar: "/placeholder.svg",
    },
    duration: "22 min",
  },
  {
    id: "1",
    title: "01. Introduction to Creative Writing",
    course: "Creative writing for beginners",
    tutor: {
      name: "Connor Garcia",
      avatar: "/placeholder.svg",
    },
    duration: "22 min",
  }
]

export default function Home() {
  return (
    <div className=" bg-customGray flex flex-row px-2">
      {/* Sidebar */}
      <Sidebar/>
       

        <main className= " flex h-fit flex-col rounded-3xl w-full m-4 px-4 py-4 text-2xl font-semibold text-customDark bg-customLight">
          {/* Navbar */}
        <Navbar/>

        {/* Course Navigator */}
        <Cnav/>
      
          {/* Content */}
        <Cards/>

        <div className='flex'>
            <LessonList lessons={lessons} />
            <Carde/>
        </div>
        </main>
    </div>
  );
}

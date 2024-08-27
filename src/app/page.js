import { allBlogs } from 'contentlayer/generated'
import Splash from '../components/Home/Splash'
import About from '../components/Home/About'
import MainProjects from '../components/Home/MainProjects'
import RecentPosts from '../components/Home/RecentPosts'

export default function Home() {
  return (
    < main className="flex flex-col items-center justify-center" >
      <Splash />
      <About />
      <MainProjects blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main >
  )
}

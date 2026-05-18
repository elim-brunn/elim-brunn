import { Beliefs } from '../components/sections/Beliefs'
import { Hero } from '../components/sections/Hero'
import { HomeProgram } from '../components/sections/home/HomeProgram'
import { HomeWelcome } from '../components/sections/home/HomeWelcome'

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeWelcome />
      <Beliefs />
      <HomeProgram />
    </>
  )
}

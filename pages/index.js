//next Image


//components
import ProjectsBtn from '../components/ProjectsBtn'
import ParticlesContainer from '../components/ParticlesContainer'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'>
            Ex non pariatur <br /> Occaecat <span className='text-accent'> Cupidatat dolor</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Ex non pariatur tempor sint anim aliquip consequat anim cillum ex. Occaecat ex officia
            amet nisi. Cupidatat dolor velit est consequat minim consectetur nisi duis dolore dolore
            esse dolor voluptate.
          </motion.p>

          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className='w-[780px] h-full absolute right-0 bottom-0'>
        <div
          className='bg-none xl:bg-hero xl:bg-cover xl:bg-right 
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <ParticlesContainer />
      </div>
    </div>
  )
}

export default Home

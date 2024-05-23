import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiPhoneLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link
        href='https://wa.me/+18723461584'
        className='hover:text-accent transition-all duration-300'
        target='_blank'>
        <RiYoutubeLine />
      </Link>
      <Link
        href='https://wa.me/+18723461584'
        className='hover:text-accent transition-all duration-300'
        target='_blank'>
        <RiInstagramLine />
      </Link>
      <Link
        href='https://wa.me/+18723461584'
        className='hover:text-accent transition-all duration-300'
        target='_blank'>
        <RiFacebookLine />
      </Link>
      <Link
        href='tel: +1 (872) 346-15-84'
        className='hover:text-accent transition-all duration-300 '>
        +1 (872) 346-15-84
      </Link>
    </div>
  )
}

export default Socials

import Link from 'next/link'
import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiPhoneLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link
        href='https://wa.me/+18723461584'
        className='hover:text-accent transition-all duration-300'
        target='_blank'>
        <RiFacebookLine />
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
        <RiWhatsappLine />
      </Link>
      <Link
        href='tel: +1 (872) 346-15-84'
        className='hover:text-accent transition-all duration-300 '>
        <RiPhoneLine />
      </Link>
    </div>
  )
}

export default Socials

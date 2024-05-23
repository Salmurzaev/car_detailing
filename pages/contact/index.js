import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' })
  const [isEmpty, setIsEmpty] = useState(true)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const url = `https://api.telegram.org/bot7088078473:AAHKLarduqUgm3nqvLQuvRnyurE5qyu62TY/sendMessage`
    const data = {
      chat_id: '-1002215368809',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDetails: ${formData.details}`
    }

    if (!isEmpty) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const result = await response.json()
        setFormData({ name: '', email: '', phone: '', details: '' })
        console.log(result, 'RES')
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  useEffect(() => {
    setIsEmpty(false)
  }, [formData])

  return (
    <div className='h-full bg-primary/30 '>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/** text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/** form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}>
            {/** group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input'
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='email'
                placeholder='email'
                className='input'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type='number'
              name='phone'
              placeholder='phone number'
              className='input'
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name='details'
              placeholder='details'
              className='textarea'
              value={formData.details}
              onChange={handleChange}
            />
            <button
              disabled={isEmpty}
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Create order
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact

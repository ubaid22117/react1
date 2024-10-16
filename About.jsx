import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div >

      <div className='text-2xl text-center pt-8 border-t'>
     <Title text1={'ABOUT'} text2={'US'}/>
      </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At [FOREVER!], we are passionate about delivering exceptional products and services that enrich lives. Our journey began with a simple mission: to provide high-quality solutions that meet the evolving needs of our customers</p>
              <p>We believe in innovation, excellence, and a customer-first approach. Whether you’re looking for cutting-edge technology, sustainable products, or unparalleled customer service, our team is committed to exceeding your expectations</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to empower individuals and businesses by delivering innovative, reliable, and sustainable solutions. We strive to exceed customer expectations through a commitment to quality, integrity, and continuous improvement</p>
            </div>
        </div>
         <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
         </div>
         <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Quality Assurance:</b>
         <p className='text-gray-600'>At [FOREVER], quality is at the heart of everything we do. We are dedicated to maintaining the highest standards in every aspect of our operations, ensuring that our products and services consistently meet and exceed customer expectations</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Convenience:</b>
         <p className='text-gray-600'>At Forever, we prioritize your convenience in everything we do. From easy-to-use platforms to seamless processes, we aim to simplify your experience at every step. Whether you're browsing our products, placing an order, or seeking customer support, we've designed our services to be intuitive and hassle-free</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Exceptional-Customer Service:</b>
         <p className='text-gray-600'>At forever, we believe that exceptional customer service is the cornerstone of a great experience. Our dedicated team is always ready to assist you, ensuring that your needs are met with professionalism, care, and attention to detail</p>
          </div>
          
         </div>
         <NewsLetterBox/>
    </div>
  )
}

export default About
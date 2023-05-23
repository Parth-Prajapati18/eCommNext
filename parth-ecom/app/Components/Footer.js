import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='p-5 overflow-hidde' style={{backgroundColor:'#212121', color: "white"}}>
    <div className='grid grid-col-1 sm:grid-cols-3 relative gap-x-8 gap-y-16'>
        <div className='px-2 sm:px-5'>
        <h1 className='text-xl pb-4 pt-2 text-center'>Contact Us</h1>
        <form>
            <label htmlFor="firstname" className=''>Name</label>
            <br></br>
            <input className='w-full h-10 text-black hover:outline-none' name='firstname'></input><br /><br />
       
            <label htmlFor="email" className='font-normal'>Email</label>
            <br></br>
            <input className='w-full h-10 text-black hover:outline-none' name='email'></input><br /><br />

            <label htmlFor="msg" className='font-normal'>Message</label>
            <br></br>
            <textarea className='w-full h-20 text-black px-0.5 hover:outline-none' name='msg' /><br /><br />
            <button className='border-2 h-10 font-normal w-full bg-plain-red'>Send Message</button>
        </form>
        </div>

      <div>
        <div className='px-10 text-center '>
            <h1 className='text-xl font-normal pb-4 pt-2'>Quick Links</h1>
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > About Us </Link>
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > Health & Safety </Link> 
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > Privacy Policy </Link> 
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > Terms of Service </Link>
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > About Us </Link>
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > Health & Safety </Link> 
            <Link  className="font-normal block py-1 no-underline" href='https://www.flipkart.com/' target='_blank' rel="noopener noreferrer" > Privacy Policy </Link> 
        </div>
      </div>

      <div className='pr-5'> 
      <h1 className='text-xl font-normal pb-4 pt-2 text-center'>Location</h1>
      <div className='flex justify-center'>
      <iframe title='location' className='px-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.4498965195276!2d-79.61381868465584!3d43.721979979118935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bb6baa97c6f%3A0x16d2b64c20f2626a!2s33%20Woodstream%20Dr%2C%20Etobicoke%2C%20ON%20M9W%206T4!5e0!3m2!1sen!2sca!4v1681007784555!5m2!1sen!2sca" width="250" height="200" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>

    </div>
    </div>
  )
}

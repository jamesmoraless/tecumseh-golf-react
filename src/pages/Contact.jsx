import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
})

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will contact you soon.')
    reset()
  }

  const scrollToContactForm = (e) => {
    e.preventDefault()
    const contactForm = document.getElementById('contact-form')
    contactForm.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Visit Us Today Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-4">Visit Us Today</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-center text-lg text-gray-600 mb-12">We're conveniently located in Tecumseh, just minutes from Windsor.</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Address</h3>
                <p className="text-gray-700 text-lg">366 Manning Rd</p>
                <p className="text-gray-700 text-lg">Windsor, ON, N8N 4W5</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Email</h3>
                <p className="text-gray-700 text-lg">info@tecumsehgolf.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p className="text-gray-700 text-lg">(519) 735-8933</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Hours</h3>
                <p className="text-gray-700 text-lg">Monday - Friday: 10:00 AM - 7:00 PM</p>
                <p className="text-gray-700 text-lg">Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 text-lg">Sunday: 10:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm italic">Hours may vary seasonally</p>
              </div>
            </div>
            
            <a href="#contact-form" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
              onClick={scrollToContactForm}
            >
              CONTACT US
            </a>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.9873814651686!2d-82.7681503237023!3d42.30143134559348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad2cfd0e24d9f%3A0xcf72b5003f39efae!2s366%20Manning%20Rd%2C%20Tecumseh%2C%20ON%20N8N%204W5%2C%20Canada!5e0!3m2!1sen!2sus!4v1716419172576!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tecumseh Golf Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div id="contact-form" className="max-w-2xl mx-auto mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-center mb-6">Send us a Message</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-6 text-center text-gray-600">
            We'd love to hear from you! Whether you have questions about golf equipment, 
            are looking for club fitting services, or need repairs, our team is here to help.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('name')}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('email')}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (optional)</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  {...register('phone')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('subject')}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                {...register('message')}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact 
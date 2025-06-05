import { Link } from 'react-router-dom'
import { StoreIcon, FittingIcon, RepairIcon, SimulatorIcon, ExpertIcon } from '../components/Icons'
import heroImage from '../assets/images/hero-bg.jpg'
import storeInterior from '../assets/images/store-interior.jpg'
import brandLogos from '../assets/images/brand-logos.png'
import productDriver from '../assets/images/product-driver.jpg'
import productIrons from '../assets/images/product-irons.jpg'
import productApparel from '../assets/images/product-apparel.jpg'

const Home = () => {
  const services = [
    {
      icon: StoreIcon,
      title: "Pro Shop",
      description: "Browse our extensive selection of premium golf equipment, apparel, and accessories from top brands.",
      link: "/store",
      linkText: "Shop Now"
    },
    {
      icon: FittingIcon,
      title: "Club Fitting",
      description: "Get custom-fitted clubs tailored to your swing for maximum performance and comfort.",
      link: "/services#fitting",
      linkText: "Learn More"
    },
    {
      icon: RepairIcon,
      title: "Club Repair",
      description: "Expert club repair services including re-gripping, shaft replacement, and loft/lie adjustments.",
      link: "/services#repair",
      linkText: "Learn More"
    },
    {
      icon: SimulatorIcon,
      title: "Simulator Testing",
      description: "Try before you buy with our in-store golf simulators to ensure your new clubs are the perfect fit.",
      link: "/services#simulator",
      linkText: "Learn More"
    },
    {
      icon: ExpertIcon,
      title: "Expert Advice",
      description: "Our knowledgeable staff provides personalized recommendations for all your golfing needs.",
      link: "/about",
      linkText: "Meet Our Team"
    }
  ]

  const featuredProducts = [
    {
      image: productDriver,
      title: "Premium Golf Drivers",
      description: "Explore our selection of the latest drivers from top brands, designed to maximize your distance off the tee.",
      link: "/store#drivers"
    },
    {
      image: productIrons,
      title: "Iron Sets",
      description: "Find the perfect set of irons to improve your accuracy and control on approach shots.",
      link: "/store#irons"
    },
    {
      image: productApparel,
      title: "Golf Apparel",
      description: "Look and feel your best on the course with our selection of high-quality golf apparel.",
      link: "/store#apparel"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section py-20 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Local Golf Experts Since 1992
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Pro Shop • Club Fitting • Club Repair • Simulator Testing
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/store" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
              Visit Our Store
            </Link>
            <Link to="/services" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-md transition duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of golf services designed to enhance your game and experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon className="w-16 h-16 mx-auto text-[var(--tecumseh-green)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="btn-tecumseh-outline">
                  {service.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={storeInterior} 
                alt="Tecumseh Golf Store Interior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Over 30 Years of Golf Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Tecumseh Golf has been serving the Windsor-Essex golf community since 1992.
              </p>
              <p className="text-gray-600 mb-4">
                As a locally owned and operated business, we take pride in providing exceptional 
                service and expertise to golfers of all skill levels. Our knowledgeable staff 
                includes PGA professionals who are passionate about helping you improve your game.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're shopping for new equipment, getting fitted for clubs, or having 
                your current clubs repaired, we're committed to making your experience at 
                Tecumseh Golf the best it can be.
              </p>
              <Link to="/about" className="btn-tecumseh-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Brands</h2>
            <p className="text-xl text-gray-600">
              We carry all the top brands in golf to ensure you have access to the best equipment for your game.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={brandLogos} 
              alt="Featured Golf Brands" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">
              Check out our selection of top-quality golf equipment and apparel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to={product.link} className="btn-tecumseh-outline">
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/store" className="btn-tecumseh-primary">
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-[var(--tecumseh-green)] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
              "Tecumseh Golf has been my go-to golf shop for over 10 years. Their knowledge, 
              selection, and customer service are unmatched in the Windsor area. The simulator 
              testing experience is excellent, and their club fitting service helped me drop 
              my handicap by 3 strokes!"
            </blockquote>
            <cite className="text-xl font-semibold">— Michael D., Loyal Customer</cite>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
      {/* Visit Us Today Section */}
      <div className="max-w-6xl mx-auto">
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
            
            <Link to="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
            >
              CONTACT US
            </Link>
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
      </section>

    </div>
  )
}

export default Home


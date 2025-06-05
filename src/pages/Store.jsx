import { Link } from 'react-router-dom'
import { SimulatorIcon } from '../components/Icons'
import { CheckCircle, RefreshCw, DollarSign, ArrowRightLeft } from 'lucide-react'
import brandLogos from '../assets/images/brand-logos.png'
import productDriver from '../assets/images/product-driver.jpg'
import productIrons from '../assets/images/product-irons.jpg'
import productPutter from '../assets/images/product-putter.jpg'
import productWedge from '../assets/images/product-wedge.jpg'
import productApparel from '../assets/images/product-apparel.jpg'
import productAccessories from '../assets/images/product-accessories.jpg'
import simulatorImage from '../assets/images/simulator.jpg'

const Store = () => {
  const productCategories = [
    {
      id: 'drivers',
      image: productDriver,
      title: 'Drivers',
      priceRange: '$299 - $599',
      description: 'Maximize your distance off the tee with our selection of premium drivers from top brands.',
      features: ['Latest technology', 'Custom shaft options', 'Professional fitting available']
    },
    {
      id: 'irons',
      image: productIrons,
      title: 'Iron Sets',
      priceRange: '$499 - $1,299',
      description: 'Improve your accuracy and control with our comprehensive selection of iron sets.',
      features: ['Game improvement to tour level', 'Steel and graphite shafts', 'Custom lie angles']
    },
    {
      id: 'putters',
      image: productPutter,
      title: 'Putters',
      priceRange: '$99 - $399',
      description: 'Find the perfect putter to improve your short game and lower your scores.',
      features: ['Blade and mallet styles', 'Various lengths available', 'Grip customization']
    },
    {
      id: 'wedges',
      image: productWedge,
      title: 'Wedges',
      priceRange: '$129 - $199',
      description: 'Master your short game with our selection of wedges in various lofts and bounces.',
      features: ['Multiple loft options', 'Different bounce angles', 'Tour-proven designs']
    },
    {
      id: 'apparel',
      image: productApparel,
      title: 'Golf Apparel',
      priceRange: '$29 - $129',
      description: 'Look and feel your best on the course with our high-quality golf clothing.',
      features: ['Moisture-wicking fabrics', 'UV protection', 'Stylish designs']
    },
    {
      id: 'accessories',
      image: productAccessories,
      title: 'Accessories',
      priceRange: '$5 - $499',
      description: 'Complete your golf setup with our wide range of accessories and training aids.',
      features: ['Golf balls and tees', 'Gloves and bags', 'Training equipment']
    }
  ]

  const storePolicies = [
    {
      icon: CheckCircle,
      title: 'Returns & Exchanges',
      description: '30-day return policy on all merchandise with receipt. Items must be in original condition.'
    },
    {
      icon: RefreshCw,
      title: 'Special Orders',
      description: 'Can\'t find what you\'re looking for? We can special order most items with a small deposit.'
    },
    {
      icon: DollarSign,
      title: 'Price Matching',
      description: 'We match competitor prices on identical items. Bring in the ad and we\'ll match it.'
    },
    {
      icon: ArrowRightLeft,
      title: 'Trade-Ins',
      description: 'Trade in your old clubs for credit towards new equipment. Fair market value guaranteed.'
    }
  ]

  return (
    <div>
      {/* Store Header */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Golf Shop</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving the Windsor-Essex community for over 30 years, our family-owned golf shop 
              offers premium equipment, expert advice, and personalized service to help improve your game.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-tecumseh-green mb-1">Local Expertise</h3>
              <p className="text-gray-600 text-sm">30+ years of experience serving golfers in the Windsor-Essex region.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-tecumseh-green mb-1">Personal Service</h3>
              <p className="text-gray-600 text-sm">Family-owned business providing personalized attention to every customer.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-tecumseh-green mb-1">Try Before You Buy</h3>
              <p className="text-gray-600 text-sm">Test equipment with our in-store simulators before making a purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">
              Quality golf equipment from brands you trust, with expert advice from people who care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <span className="text-tecumseh-green font-semibold">{category.priceRange}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="text-sm text-gray-500 mb-4">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <CheckCircle className="h-4 w-4 text-tecumseh-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full inline-block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Brands</h2>
            <p className="text-xl text-gray-600">
              We proudly carry equipment from the most trusted names in golf.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">TaylorMade</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Callaway</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Titleist</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">PING</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Testing Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={simulatorImage} 
                alt="Golf Simulator" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <SimulatorIcon className="w-12 h-12 text-tecumseh-green mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Try Before You Buy</h2>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Our two state-of-the-art golf simulators allow you to test equipment before making a purchase,
                ensuring you get clubs that truly match your swing and playing style.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Test different club models and specifications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">See real-time ball flight data and statistics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Compare performance between different options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Free with any equipment purchase</span>
                </div>
              </div>
              <Link to="/services#simulator" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store Policies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Store Policies</h2>
            <p className="text-xl text-gray-600">
              Our customer-friendly policies are designed with you in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storePolicies.map((policy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <policy.icon className="w-12 h-12 text-tecumseh-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 text-sm">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-tecumseh-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Family-Owned Golf Shop</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            For over 30 years, we've been helping golfers in Windsor-Essex find the perfect equipment for their game.
            Stop by our shop for personalized service and expert advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-tecumseh-green hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300">
              Contact Us
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-tecumseh-green text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Store


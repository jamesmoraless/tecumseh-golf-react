import { Link } from 'react-router-dom'
import { FittingIcon, RepairIcon, SimulatorIcon } from '../components/Icons'
import { CheckCircle, Clock, DollarSign } from 'lucide-react'
import clubFittingImage from '../assets/images/club-fitting.jpg'
import simulatorImage from '../assets/images/simulator.jpg'

const Services = () => {
  const fittingServices = [
    {
      service: 'Driver Fitting',
      price: '$75',
      duration: '45 minutes',
      description: 'Optimize your driver for maximum distance and accuracy'
    },
    {
      service: 'Iron Fitting',
      price: '$100',
      duration: '60 minutes',
      description: 'Get fitted for the perfect iron set for your swing'
    },
    {
      service: 'Putter Fitting',
      price: '$50',
      duration: '30 minutes',
      description: 'Find the putter that will help you sink more putts'
    },
    {
      service: 'Full Bag Fitting',
      price: '$200',
      duration: '2 hours',
      description: 'Complete fitting session for your entire set of clubs'
    }
  ]

  const repairServices = [
    {
      service: 'Re-gripping',
      price: '$5 - $10 per club',
      description: 'Replace worn grips with new ones for better feel and control'
    },
    {
      service: 'Shaft Replacement',
      price: '$30 - $60 per club',
      description: 'Upgrade or replace damaged shafts with premium options'
    },
    {
      service: 'Loft/Lie Adjustments',
      price: '$5 per club',
      description: 'Fine-tune your club angles for optimal ball flight'
    },
    {
      service: 'Length Adjustments',
      price: '$10 per club',
      description: 'Extend or shorten clubs to match your height and swing'
    }
  ]

  const simulatorServices = [
    {
      service: 'Pre-Purchase Testing',
      price: 'Free',
      description: 'Test any equipment before buying to ensure it\'s right for you'
    },
    {
      service: 'Swing Analysis',
      price: '$50',
      description: 'Detailed analysis of your swing with recommendations for improvement'
    },
    {
      service: 'Club Comparison',
      price: '$30',
      description: 'Compare different club options to find the best fit for your game'
    }
  ]

  return (
    <div>
      {/* Services Header */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving the Windsor-Essex community for over 30 years, Tecumseh Golf provides expert 
              club fitting, repair, and simulator testing services to help improve your game.
            </p>
          </div>
        </div>
      </section>

      {/* Club Fitting Section */}
      <section id="fitting" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <FittingIcon className="w-12 h-12 text-tecumseh-green mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Club Fitting</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our professional club fitting service ensures that your equipment is perfectly 
                matched to your swing characteristics. As a locally owned shop with over 30 years of experience, 
                we provide personalized attention to help you achieve better performance on the course.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Launch monitor technology for precise measurements</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Extensive selection of premium brand equipment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">PGA-trained professional expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Try before you buy with our simulators</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={clubFittingImage} 
                alt="Club Fitting Session" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Fitting Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fittingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tecumseh-green">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>
                <div className="flex items-center text-tecumseh-green font-bold text-lg mb-2">
                  <DollarSign className="h-5 w-5 mr-1" />
                  {service.price}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.duration}
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Repair Section */}
      <section id="repair" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <RepairIcon className="w-12 h-12 text-tecumseh-green mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Club Repair</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your clubs in top condition with our expert repair services. 
              With decades of experience, our technicians use only the highest quality parts 
              and materials to ensure your clubs perform at their best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {repairServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>
                <div className="text-tecumseh-green font-bold text-lg mb-3">{service.price}</div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Repair Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-tecumseh-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Assessment</h4>
                <p className="text-gray-600 text-sm">We evaluate your clubs and provide a detailed quote</p>
              </div>
              <div className="text-center">
                <div className="bg-tecumseh-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Repair</h4>
                <p className="text-gray-600 text-sm">Our experts perform the repair using quality materials</p>
              </div>
              <div className="text-center">
                <div className="bg-tecumseh-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Quality Check</h4>
                <p className="text-gray-600 text-sm">Final inspection ensures your clubs meet our standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Testing Section */}
      <section id="simulator" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
                <h2 className="text-4xl font-bold text-gray-900">Simulator Testing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our two state-of-the-art golf simulators provide accurate ball flight data, 
                making them perfect for equipment testing before you buy. This try-before-you-buy 
                advantage ensures you get the right clubs for your game.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">High-speed cameras and sensors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Real-time ball flight data</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Compare different equipment options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tecumseh-green mr-3" />
                  <span className="text-gray-700">Detailed performance analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {simulatorServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-tecumseh-green">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.service}</h3>
                <div className="text-tecumseh-green font-bold text-2xl mb-4">{service.price}</div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-tecumseh-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Game?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            With over 30 years of experience serving the Windsor-Essex golf community, 
            our family-owned shop provides the expertise and personal service you deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-tecumseh-green hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300">
              Contact Us
            </Link>
            <Link to="/store" className="bg-transparent border-2 border-white hover:bg-white hover:text-tecumseh-green text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services


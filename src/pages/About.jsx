import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">About Tecumseh Golf</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Established in 1992, Tecumseh Golf has been a cornerstone of the Windsor-Essex golfing community for over 30 years. 
            As a locally owned and operated business, we've built our reputation on providing expert advice, quality equipment, and personalized service.
          </p>
          <p className="mb-4">
            Our mission is to help golfers of all skill levels improve their game with the right equipment and professional fitting services. 
            We take pride in our knowledge, attention to detail, and the relationships we've built with our customers over three decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Premium golf equipment sales</li>
              <li>Professional club fitting services</li>
              <li>Club repair and maintenance</li>
              <li>Golf simulator testing</li>
              <li>Expert advice from experienced staff</li>
              <li>Trade-ins for credit toward new equipment</li>
            </ul>
            <p className="mt-4">
              With our in-store golf simulators, you can try before you buy, ensuring you get equipment 
              that truly matches your swing and playing style.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Club Fitting</h2>
            <p className="mb-4">
              Our professional club fitting services help you find the perfect equipment for your game:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Driver fitting (45 minutes)</li>
              <li>Iron fitting (60 minutes)</li>
              <li>Putter fitting (30 minutes)</li>
              <li>Full bag fitting (2 hours)</li>
            </ul>
            <p className="mt-4">
              Using our simulator technology and launch monitors, we analyze your swing to recommend 
              the best equipment options for your game.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
          <p className="mb-4">
            We carry a wide selection of premium golf brands including:
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <span className="px-4 py-2 bg-gray-100 rounded-full">TaylorMade</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Callaway</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">Titleist</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">PING</span>
          </div>
          <p>
            From drivers and iron sets to putters, wedges, golf apparel, and accessories, 
            we have everything you need to enjoy your time on the course.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg">Local Expertise</h3>
              <p>With over 30 years serving the community, we understand local golfers' needs.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Personal Service</h3>
              <p>As a family-owned business, we provide attentive, personalized service to every customer.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Professional Knowledge</h3>
              <p>Our PGA-trained staff can help with equipment selection, fitting, and maintenance.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Try Before You Buy</h3>
              <p>Our simulator technology lets you test equipment before making your purchase.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Complete Service</h3>
              <p>From sales and fitting to repairs, we handle all your golf equipment needs in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 
import React from 'react';
import { Calendar, MapPin, Users, Headphones, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: 'Custom Itinerary Planning',
      description: 'Personalized travel plans tailored to your preferences, budget, and timeline with detailed day-by-day activities.',
      color: 'travel-sky',
      bgColor: 'bg-travel-sky/10',
      iconColor: 'text-travel-sky',
    },
    {
      icon: MapPin,
      title: 'Local Experience Suggestions',
      description: 'Discover hidden gems and authentic local experiences that only insiders know about in your destination.',
      color: 'travel-mint',
      bgColor: 'bg-travel-mint/10',
      iconColor: 'text-travel-mint',
    },
    {
      icon: Users,
      title: 'Group Tour Coordination',
      description: 'Seamlessly organize group travels for families, friends, or corporate teams with comprehensive coordination.',
      color: 'travel-sunset',
      bgColor: 'bg-travel-sunset/10',
      iconColor: 'text-travel-sunset',
    },
    {
      icon: Headphones,
      title: '24/7 Travel Support',
      description: 'Round-the-clock assistance throughout your journey to ensure a smooth and worry-free travel experience.',
      color: 'travel-ocean',
      bgColor: 'bg-travel-ocean/10',
      iconColor: 'text-travel-ocean',
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-travel-sky/10 px-4 py-2 rounded-full text-travel-sky text-sm font-semibold mb-6">
            <Calendar className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need for{' '}
            <span className="text-travel-sky">Perfect Travel</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From planning to execution, we provide comprehensive travel services to make your journey seamless and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${service.bgColor} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-sky transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button className="flex items-center space-x-2 text-travel-sky font-semibold group-hover:text-travel-ocean transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a personalized travel experience that exceeds your expectations and creates memories to last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-travel-sky hover:bg-travel-ocean text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Custom Quote
            </button>
            <button className="border-2 border-travel-sky text-travel-sky hover:bg-travel-sky hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

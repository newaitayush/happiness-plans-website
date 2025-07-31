import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Solo Traveler',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      review: 'Happiness Plans turned my dream of backpacking through Southeast Asia into reality. Their attention to detail and local connections made every moment unforgettable. I felt safe and supported throughout my entire journey.',
      rating: 5,
      destination: 'Southeast Asia'
    },
    {
      name: 'Michael Chen',
      role: 'Family Vacation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      review: 'Planning a family trip with three kids seemed impossible until we found Happiness Plans. They created an itinerary that kept everyone happy and engaged. Our European adventure was seamless from start to finish.',
      rating: 5,
      destination: 'Europe'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Honeymoon',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      review: 'Our honeymoon in the Maldives was beyond perfect. Every detail was thoughtfully planned, from the romantic dinners to the surprise excursions. Happiness Plans made our special moment truly magical.',
      rating: 5,
      destination: 'Maldives'
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-travel-mint/10 px-4 py-2 rounded-full text-travel-mint text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            <span>Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Our{' '}
            <span className="text-travel-sky">Happy Travelers</span>{' '}
            Say
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about their amazing travel experiences with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-travel-sky p-3 rounded-full shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 mt-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Destination */}
              <div className="mb-6">
                <span className="inline-block bg-travel-mint/20 text-travel-mint text-sm font-semibold px-3 py-1 rounded-full">
                  {testimonial.destination}
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-travel-sky to-travel-ocean rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

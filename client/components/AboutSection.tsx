import React from 'react';
import { Award, Heart, Globe, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-travel-sky/10 px-4 py-2 rounded-full text-travel-sky text-sm font-semibold mb-6">
              <Heart className="h-4 w-4" />
              <span>About Happiness Plans</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Create{' '}
              <span className="text-travel-sky">Unforgettable</span>{' '}
              Travel Experiences
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Happiness Plans, we believe that travel is more than just visiting new places—it's about creating memories that last a lifetime. Our mission is to transform your travel dreams into perfectly planned realities.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by passionate travelers who understand the joy of exploration, we combine local expertise with personalized service to craft journeys that reflect your unique interests and desires.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-travel-mint/20 p-3 rounded-xl">
                  <Award className="h-6 w-6 text-travel-mint" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5 Years</div>
                  <div className="text-gray-600 text-sm">Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-travel-sunset/20 p-3 rounded-xl">
                  <Globe className="h-6 w-6 text-travel-sunset" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600 text-sm">Countries</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-travel-sky hover:bg-travel-ocean text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Learn More
              </button>
              <button className="border-2 border-travel-sky text-travel-sky hover:bg-travel-sky hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Our Story
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1635&q=80"
                alt="Travel planning team"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-travel-sky/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-travel-sky" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-600 text-sm">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

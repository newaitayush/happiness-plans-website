import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-travel-sky/10 p-6 rounded-full w-fit mx-auto mb-8">
          <Construction className="h-16 w-16 text-travel-sky mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <p className="text-lg text-gray-500 mb-12">
          This page is coming soon! Continue prompting to have us build out the content for this section.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-travel-sky hover:bg-travel-ocean text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 border-2 border-travel-sky text-travel-sky hover:bg-travel-sky hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

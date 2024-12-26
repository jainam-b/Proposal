import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential',
    price: 499,
    features: [
      'Professional Custom-Designed Landing Page',
      'Advanced Responsive Design with Mobile-First Approach',
      'Strategic SEO Implementation for Maximum Visibility',
      'Accelerated 7-Day Delivery Timeline',
      'Comprehensive Design Review and Refinement Session',
      'Secure Contact Form with Custom Field Integration'
    ]
  },
  {
    name: 'Professional',
    price: 999,
    features: [
      'Comprehensive Multi-Page Website Solution (5 Pages)',
      'Conversion-Optimized Architecture and User Flow',
      'Enterprise-Grade Performance Optimization',
      'Advanced SEO Strategy Implementation',
      'Complete Brand Identity Package (Logo, Typography, Color System)',
      'Multiple Design Iteration Cycles with Expert Consultation',
      'Dedicated 30-Day Technical Support'
    ]
  },
  {
    name: 'Enterprise',
    price: 1499,
    features: [
      'Full-Scale E-commerce Solution with Custom Architecture',
      'Unlimited Page Creation and Product Integration',
      'Comprehensive SEO Strategy with Competitive Analysis',
      'Premium UI/UX with Custom Micro-interactions',
      'Multi-Provider Payment Integration with Secure Processing',
      'Extended Consultation and Revision Cycle',
      'Priority 24/7 Technical Support and Maintenance',
      'Dedicated Project Manager and Strategy Consultant'
    ]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="relative min-h-screen  py-16 px-4 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Transparent</span> <span className="text-red-500">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan tailored to your business needs
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">${tier.price}</span>
                    <span className="text-gray-400">/website</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-300">What's included:</h4>
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button
                <button className="w-full mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
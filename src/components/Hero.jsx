import React from 'react';
import { ArrowRight, Heart, TreePine } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-green-900 mb-6">
              Protect Our Planet,<br />One Donation at a Time
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join us in preserving Earth's precious ecosystems. Your regular donations help environmental organizations make a lasting impact on our planet's future.
            </p>
            <div className="flex flex-wrap gap-4">
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80"
              alt="Environmental Conservation"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Impact</p>
                  <p className="text-xl font-bold text-green-800">$2.5M+ Raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
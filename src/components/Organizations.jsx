import React from 'react';
import OrganizationCard from './OrganizationCard';
// Move data to a separate file if needed
const organizations = [
  {
    id: 1,
    name: "Rainforest Alliance",
    description: "Protecting rainforests and supporting sustainable agriculture practices worldwide.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    raised: 850000,
  },
  {
    id: 2,
    name: "Ocean Conservation Initiative",
    description: "Dedicated to preserving marine ecosystems and protecting endangered sea life.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    raised: 620000,
  },
  {
    id: 3,
    name: "Wildlife Protection Fund",
    description: "Safeguarding endangered species and their natural habitats across the globe.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1777&q=80",
    raised: 935000,
  },
];

export default function Organizations() {
    return (
      <section aria-labelledby="featured-organizations" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="featured-organizations" className="text-3xl font-bold text-gray-900 mb-4">Featured Organizations</h2>
            <p className="text-lg text-gray-600">Support these verified environmental organizations making a real impact</p>
          </div>
          {organizations.length === 0 ? (
            <p className="text-center text-gray-600">No organizations available at the moment. Please check back later.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizations.map((org) => (
                <OrganizationCard key={org.id} org={org} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
  
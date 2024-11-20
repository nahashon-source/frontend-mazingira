import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import OrganizationCard from '../components/OrganizationCard';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const organizations = [
  {
    id: 1,
    name: "Rainforest Alliance",
    description: "Protecting rainforests and supporting sustainable agriculture practices worldwide.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    raised: 850000,
    status: "Approved",
  },
  {
    id: 2,
    name: "Ocean Conservation Initiative",
    description: "Dedicated to preserving marine ecosystems and protecting endangered sea life.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    raised: 620000,
    status: "Pending",
  },
  {
    id: 3,
    name: "Wildlife Protection Fund",
    description: "Safeguarding endangered species and their natural habitats across the globe.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    raised: 935000,
    status: "Rejected",
  },
  {
    id: 4,
    name: "Clean Energy Alliance",
    description: "Promoting renewable energy solutions and reducing carbon emissions globally.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    raised: 445000,
    status: "Approved",
  },
  {
    id: 5,
    name: "Sustainable Agriculture Network",
    description: "Supporting farmers in adopting environmentally friendly farming practices.",
    image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    raised: 580000,
    status: "Pending",
  },
  {
    id: 6,
    name: "Water Conservation Trust",
    description: "Protecting freshwater resources and ensuring clean water access worldwide.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    raised: 720000,
    status: "Approved",
  },
];

export default function Organizations() {
  const [newOrg, setNewOrg] = useState({
    name: '',
    description: '',
    raised: '',
    image: '', // Added the image field
  });

  const [orgList, setOrgList] = useState(organizations);
  const [filterStatus, setFilterStatus] = useState('All');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrg((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newOrg.name || !newOrg.description || !newOrg.raised || !newOrg.image) {
      alert('All fields are required');
      return;
    }
    const newOrganization = {
      ...newOrg,
      id: orgList.length + 1,
      status: 'Pending', // New organizations start as 'Pending'
    };
    setOrgList((prev) => [...prev, newOrganization]);
    setNewOrg({ name: '', description: '', raised: '', image: '' }); // Clear form after submit
  };

  const filteredOrganizations =
    filterStatus === 'All'
      ? orgList
      : orgList.filter((org) => org.status === filterStatus);

  const updateOrganizationStatus = (id, newStatus) => {
    setOrgList((prev) =>
      prev.map((org) =>
        org.id === id ? { ...org, status: newStatus } : org
      )
    );
  };

  return (
    <div className="pt-16">
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="mx-auto h-12 w-12 text-green-600" />
            <h1 className="mt-4 text-4xl font-bold text-green-900">Environmental Organizations</h1>
            <p className="mt-2 text-lg text-gray-600">
              Support verified organizations making real impact
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center space-x-4">
          {['All', 'Approved', 'Pending', 'Rejected'].map((status) => (
            <button
              key={status}
              className={`py-2 px-4 rounded-md ${
                filterStatus === status
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setFilterStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Organization Creation Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Create a New Organization
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newOrg.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newOrg.description}
              onChange={handleInputChange}
              required
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="raised"
              className="block text-sm font-medium text-gray-700"
            >
              Amount Raised
            </label>
            <input
              type="number"
              id="raised"
              name="raised"
              value={newOrg.raised}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={newOrg.image}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Create Organization
          </button>
        </form>
      </div>

      {/* Organization Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOrganizations.map((org) => (
            <OrganizationCard 
              key={org.id} 
              org={org} 
              onStatusChange={updateOrganizationStatus}
            />
          ))}
        </div>
      </div>

      <footer className="bg-white py-6 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          {/* Dynamic Year Handling */}
          <p className="text-lg">&copy; {new Date().getFullYear()} Mazingira. All rights reserved.</p>
          <p className="mt-2 text-sm">Your support helps protect the planet for future generations.</p>

          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={30} className="text-green-600 hover:text-green-800" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} className="text-pink-600 hover:text-pink-800" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

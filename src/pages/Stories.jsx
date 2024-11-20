import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

// Initial state for stories (including beneficiary and inventory)
const initialStories = [
  {
    id: 1,
    title: "Restoring the Amazon Rainforest",
    content: "Through community efforts and sustainable practices, we've helped restore over 1,000 hectares of rainforest...",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    organization: "Rainforest Alliance",
    beneficiary: "Amazonian Tribe",
    inventory: "500 tree saplings, 200 water filtration units",
    date: "2024-03-01"
  }, {
    id: 2,
    title: "Marine Life Conservation Success",
    content:
      "Our recent initiative has successfully protected endangered sea turtles and their nesting sites...",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    organization: "Ocean Conservation Initiative",
    beneficiary: "Marine ecosystems",
    inventory: "N/A",
    date: "2024-02-28",
  },
  
];

// Form validation schema with Yup
const validationSchema = Yup.object({
  organization: Yup.string().required('Organization name is required'),
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
  image: Yup.string().url('Invalid image URL').optional(),
  beneficiary: Yup.string().required('Beneficiary name is required'),
  inventory: Yup.string().required('Inventory details are required'),
});

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState(new Date());
  const [stories, setStories] = useState(initialStories);

  const formik = useFormik({
    initialValues: {
      organization: '',
      title: '',
      content: '',
      image: '',
      beneficiary: '',
      inventory: '',
      date: date.toISOString(),
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newStory = {
        id: stories.length + 1,
        title: values.title,
        content: values.content,
        image: values.image || "https://via.placeholder.com/600x400",
        organization: values.organization,
        beneficiary: values.beneficiary,
        inventory: values.inventory,
        date: date.toISOString(),
      };

      setStories((prevStories) => [...prevStories, newStory]);
      resetForm();
    }
  });

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextStory, 5000);
    return () => clearInterval(intervalId);
  }, [stories.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white-200 via-white-300 to-white-500">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-10">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Post a Story</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Organization Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Organization Name</label>
              <input
                type="text"
                name="organization"
                placeholder="Enter your organization name"
                value={formik.values.organization}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {formik.touched.organization && formik.errors.organization ? (
                <div className="text-red-500 text-sm">{formik.errors.organization}</div>
              ) : null}
            </div>

            {/* Title */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter story title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm">{formik.errors.title}</div>
              ) : null}
            </div>

            {/* Content */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                placeholder="Enter story content"
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="6"
              />
              {formik.touched.content && formik.errors.content ? (
                <div className="text-red-500 text-sm">{formik.errors.content}</div>
              ) : null}
            </div>

            {/* Beneficiary */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Beneficiary Name</label>
              <input
                type="text"
                name="beneficiary"
                placeholder="Enter beneficiary name"
                value={formik.values.beneficiary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {formik.touched.beneficiary && formik.errors.beneficiary ? (
                <div className="text-red-500 text-sm">{formik.errors.beneficiary}</div>
              ) : null}
            </div>

            {/* Inventory */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Inventory Sent</label>
              <textarea
                name="inventory"
                placeholder="Enter inventory sent (e.g., items, quantity)"
                value={formik.values.inventory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
              />
              {formik.touched.inventory && formik.errors.inventory ? (
                <div className="text-red-500 text-sm">{formik.errors.inventory}</div>
              ) : null}
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Image URL (Optional)</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-500 text-sm">{formik.errors.image}</div>
              ) : null}
            </div>

            {/* Current Date */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Current Date and Time</label>
              <p className="text-gray-600">{date.toLocaleString()}</p>
            </div>

            {/* Post Story Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-md hover:bg-green-700 transition duration-200"
            >
              Post Story
            </button>
          </form>

          <h3 className="text-2xl font-bold text-center text-green-700 mt-12 mb-6">Success Stories</h3>

          <div className="relative">
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
              <img
                src={stories[currentIndex].image}
                alt={stories[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex justify-between items-center">
              <button
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length)}
                className="text-white bg-gray-800 p-4 rounded-full opacity-50 hover:opacity-100 transition duration-200"
              >
                &#10094;
              </button>
              <button
                onClick={nextStory}
                className="text-white bg-gray-800 p-4 rounded-full opacity-50 hover:opacity-100 transition duration-200"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-bold text-green-700 mb-4">{stories[currentIndex].title}</h4>
            <p className="text-gray-700 mb-4">{stories[currentIndex].content}</p>
            <p className="text-gray-500 mb-2"><strong>Beneficiary:</strong> {stories[currentIndex].beneficiary}</p>
            <p className="text-gray-500 mb-2"><strong>Inventory Sent:</strong> {stories[currentIndex].inventory}</p>
            <p className="text-gray-500 mb-4"><strong>Posted By:</strong> {stories[currentIndex].organization}</p>
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
      </div>
    </div>
  );
}

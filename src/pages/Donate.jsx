import React, { useState } from 'react';
import { CreditCard, Calendar, DollarSign, Heart } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState('monthly');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [currency, setCurrency] = useState('Ksh');
  const [buttonText, setButtonText] = useState('Complete Donation');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate button processing state
    setButtonText('Processing...');
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 0.02 seconds
    setButtonText('Accepted Transaction');

    // Log donation details
    console.log({
      amount: donationAmount,
      currency,
      isRecurring,
      frequency: isRecurring ? frequency : null,
      isAnonymous,
      paymentMethod,
    });
  };

  const currencySymbols = {
    Ksh: 'KSh',
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  const getCurrencySymbol = (currencyCode) => {
    return currencySymbols[currencyCode] || currencyCode;
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <DollarSign className="mx-auto h-16 w-16 text-white" />
          <h1 className="mt-4 text-4xl font-bold">Make a Donation</h1>
          <p className="mt-2 text-lg">Support environmental conservation efforts worldwide</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Donation Amount */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Donation Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-400">
                  {getCurrencySymbol(currency)}
                </span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>

            {/* Currency Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="Ksh">Kenyan Shilling (Ksh)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
              </select>
            </div>

            {/* Recurring Donation */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="recurring" className="ml-2 text-sm text-gray-900">
                  Make this a recurring donation
                </label>
              </div>

              {isRecurring && (
                <div className="ml-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Frequency</label>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${frequency === 'monthly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      onClick={() => setFrequency('monthly')}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${frequency === 'quarterly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      onClick={() => setFrequency('quarterly')}
                    >
                      Quarterly
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${frequency === 'yearly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      onClick={() => setFrequency('yearly')}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Anonymous Donation */}
            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 text-sm text-gray-900">
                  Make this an anonymous donation
                </label>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700">Payment Method</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="mpesa">MPESA</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {/* Payment Form Based on Selected Method */}
            {paymentMethod === 'creditCard' || paymentMethod === 'debitCard' ? (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Card Information</label>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
                <div className="flex space-x-4 mt-4">
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
              </div>
            ) : paymentMethod === 'mpesa' ? (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">MPESA Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your MPESA phone number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            ) : paymentMethod === 'paypal' ? (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">PayPal Email</label>
                <input
                  type="email"
                  placeholder="Enter your PayPal email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            ) : null}

            {/* Donation Summary */}
            <div className="mt-8 border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-700">Summary</h3>
              <p className="mt-2 text-sm text-gray-600">
                Donation Amount: {getCurrencySymbol(currency)} {donationAmount}
              </p>
              {isRecurring && (
                <p className="mt-2 text-sm text-gray-600">Recurring: {frequency.charAt(0).toUpperCase() + frequency.slice(1)}</p>
              )}
              <p className="mt-2 text-sm text-gray-600">
                Anonymous Donation: {isAnonymous ? 'Yes' : 'No'}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Payment Method: {paymentMethod ? paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1) : 'None'}
              </p>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Sharing Section */}
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

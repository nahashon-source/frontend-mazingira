import React from 'react';
import PropTypes from 'prop-types';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function OrganizationCard({ org }) {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate', {
      state: {
        orgId: org.id,
        orgName: org.name,
        orgImage: org.image,
        orgRaised: org.raised,
      },
    });
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={org.image || '/default-image.jpg'}
        alt={org.name || 'Organization Image'}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{org.name}</h3>
        <p className="text-gray-600 mb-4">{org.description}</p>
        <div className="flex items-center justify-between">
          {org.status !== 'Rejected' && (
            <div>
              <p className="text-sm text-gray-500">Raised so far</p>
              <p className="text-lg font-semibold text-green-600">${org.raised.toLocaleString()}</p>
            </div>
          )}
          {org.status === 'Approved' ? (
            <button
              onClick={handleDonateClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
              aria-label={`Donate to ${org.name}`}
            >
              <Heart size={18} />
              Donate
            </button>
          ) : (
            <p className="text-sm text-gray-500">
              <strong>Status:</strong> {org.status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

OrganizationCard.propTypes = {
  org: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    raised: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrganizationCard;

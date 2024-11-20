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

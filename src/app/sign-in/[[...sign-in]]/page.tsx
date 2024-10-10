"use client"; // Ensures that this code runs only on the client side

import { useEffect, useState } from 'react';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  const [isAddressValid, setIsAddressValid] = useState<boolean | null>(null);

  // Function to handle successful geolocation retrieval
  const handleGeolocationSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    validateLocation(latitude, longitude);
  };

  // Function to handle geolocation errors
  const handleGeolocationError = () => {
    setIsAddressValid(false); // Automatically set address as invalid if geolocation fails
  };

  // Function to request geolocation on page load
  const requestGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
    } else {
      setIsAddressValid(false);
    }
  };

  // Validate if the user is within 50 km of Paris
  const validateLocation = (latitude: number, longitude: number) => {
    const parisLatitude = 48.8566;
    const parisLongitude = 2.3522;
    const distance = calculateDistance(latitude, longitude, parisLatitude, parisLongitude);
    setIsAddressValid(distance <= 50);
  };

  // Helper function to calculate distance using the Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  // Request geolocation when the component is mounted
  useEffect(() => {
    requestGeolocation();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {isAddressValid === null ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">Determining your location...</p>
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        ) : isAddressValid ? (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome! Sign In Below</h1>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" fallbackRedirectUrl="/dashboard" />
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Location Restriction</h2>
            <p className="text-gray-700">Your address is outside the 50 km radius of Paris.</p>
            <p className="text-gray-700 mt-2">You cannot sign up at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}

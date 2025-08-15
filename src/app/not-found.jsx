
"use client"
import CustomButton from '@/components/shared/Button/CustomButton';
import { ArrowLeft, Home } from 'lucide-react';
import React from 'react';

const NotFound = () => {
     const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back()
    }
  }

  const handleGoHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }
    return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you&apos;re looking for does&apos;t exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <CustomButton
            onClick={handleGoHome}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </CustomButton>

          <CustomButton
            onClick={handleGoBack}
            variant="outline"
            type="secondary"
            className="px-6 py-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </CustomButton>
        </div>
      </div>
    </div>
    );
};

export default NotFound;
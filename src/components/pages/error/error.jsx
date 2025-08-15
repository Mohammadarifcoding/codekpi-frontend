"use client"

import CustomButton from "@/components/shared/Button/CustomButton";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

const ErrorPage = ( { errorCode = "404",
  title = "Page Not Found",
  description = "Sorry, we couldn't find the page you're looking for.",
  className = ""}) => {
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
  <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 ${className}`}>
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="mb-6">
          <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-gray-300 mb-4">{errorCode}</h1>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton
            onClick={handleGoHome}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </CustomButton>

          <Button
            onClick={handleGoBack}
            variant="outline"
            className="border-gray-300 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Need help? Contact us at{" "}
            <a href="mailto:contact@codekpi.org" className="text-orange-500 hover:text-orange-600">
              contact@codekpi.org
            </a>
          </p>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;
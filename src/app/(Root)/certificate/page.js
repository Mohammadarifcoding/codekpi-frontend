"use client";
import { useState } from "react";
import {
  Search,
  Download,
  AlertCircle,
  Award,
  Home,
  Mail,
  Trophy,
  Star,
  Calendar,
  FileText,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CertificateData } from "@/data/certificate";

// Certificate Card
const CertificateCard = ({ certificate, isLoading, onDownload }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 max-w-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <Badge className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 mb-2">
          <Award className="w-4 h-4" /> Certificate Ready
        </Badge>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          🎓 Congratulations!
        </h2>
        <p className="text-gray-600 text-sm">
          Your AI Workshop certificate is ready
        </p>
      </div>

      {/* Certificate Info */}
      <div className="space-y-4 mb-6">
        {/* Name */}
        <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
          <div className="p-3 rounded-lg bg-gray-100">
            <FileText className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Student Name</p>
            <p className="text-lg font-semibold text-gray-900">
              {certificate.name}
            </p>
          </div>
        </div>

        {/* ID and Score */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
            <div className="p-3 rounded-lg bg-gray-100">
              <Badge className="bg-gray-800 text-white text-sm">
                {certificate.id}
              </Badge>
            </div>
            <div>
              <p className="text-xs text-gray-500">Student ID</p>
              <p className="text-sm font-semibold text-gray-900">
                {certificate.id}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
            <div className="p-3 rounded-lg bg-gray-100">
              <Star className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Score</p>
              <p className="text-sm font-semibold text-gray-900">
                {certificate.mark}/100
              </p>
            </div>
          </div>
        </div>

        {/* Issue Date */}
        {certificate.issueDate && (
          <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
            <div className="p-3 rounded-lg bg-gray-100">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Issue Date</p>
              <p className="text-sm font-semibold text-gray-900">
                {new Date(certificate.issueDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Download Button */}
      <div>
        <Button
          onClick={onDownload}
          disabled={isLoading}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-3 font-semibold transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Downloading...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" /> Download Certificate
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

// Not Found UI
const NotFoundUI = ({ email, onReset }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
    <p>Certificate not found for {email}</p>
    <Button onClick={onReset} className="mt-4 bg-orange-500 text-white">
      Try Again
    </Button>
  </div>
);

// Main Page
const CertificateLookupPage = () => {
  const [email, setEmail] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email.trim()) return alert("Enter your email");

    setIsSearching(true);
    setCertificate(null);
    setNotFound(false);

    await new Promise((r) => setTimeout(r, 1000));
    const result = CertificateData.find((cert) => cert.email === email);

    if (result) setCertificate(result);
    else setNotFound(true);

    setIsSearching(false);
  };

  const handleDownload = async () => {
    if (!certificate) return;
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = certificate.downloadLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  const handleReset = () => {
    setEmail("");
    setCertificate(null);
    setNotFound(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 mt-10">
      <div className="relative z-10 max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Workshop Certificate
          </h1>
          <p className="text-gray-600">
            Enter your registered email below to find and download your
            certificate
          </p>
        </div>

        {!certificate && !notFound ? (
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  <Mail className="w-4 h-4 inline mr-2" /> Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                  disabled={isSearching}
                />
              </div>
              <Button
                type="submit"
                disabled={isSearching}
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {isSearching ? "Searching..." : "Find My Certificate"}
              </Button>
            </form>
          </div>
        ) : certificate ? (
          <>
            {/* Certificate Success */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                <Trophy className="w-12 h-12 text-gray-900" />
              </div>
              <p className="mt-2 text-gray-700 font-medium">
                Certificate found for{" "}
                <span className="font-semibold">{certificate.name}</span>
              </p>
            </div>

            <CertificateCard
              certificate={certificate}
              isLoading={isDownloading}
              onDownload={handleDownload}
            />

            <Button
              onClick={handleReset}
              className="mt-4 w-full bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors rounded-lg"
            >
              Search Another Certificate
            </Button>
          </>
        ) : (
          <NotFoundUI email={email} onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default CertificateLookupPage;

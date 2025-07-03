import { Check, Upload } from "lucide-react"
import ErrorMessage from "../Error/ErrorMessage"
import Image from "next/image"
import { useRef, useState } from "react"
import axios from "axios"

const ImageUpload = ({ value, onChange, error }) => {
  const [uploading, setUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileUpload = async (file) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB")
      return
    }

    setUploading(true)

    try {
      // Create FormData for Cloudinary upload
      const formData = new FormData()
      formData.append("file", file)
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET); // Use environment variable
      formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) // Replace with your Cloudinary cloud name

    //   const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
    //     method: "POST",
    //     body: formData,
    //   })

      const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

      const data = response.data

      if (data.secure_url) {
        onChange(data.secure_url)
      } else {
        throw new Error("Upload failed")
      }
    } catch (error) {
      console.error("Upload error:", error)
      alert("Failed to upload image. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileUpload(file)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) handleFileUpload(file)
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Profile Picture {error && <span className="text-red-500">*</span>}
      </label>

      {/* Current Image Preview */}
      {value && (
        <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <Image src={value || "/placeholder.svg"} alt="Profile" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />
          <div className="flex-1">
            <p className="text-sm text-green-700 font-medium">Image uploaded successfully!</p>
            <p className="text-xs text-green-600">You can upload a new image to replace this one.</p>
          </div>
          <Check className="w-5 h-5 text-green-500" />
        </div>
      )}

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
          error
            ? "border-red-300 bg-red-50"
            : dragActive
              ? "border-orange-400 bg-orange-50"
              : uploading
                ? "border-gray-300 bg-gray-50"
                : "border-gray-300 hover:border-orange-400 hover:bg-orange-50"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={uploading}
        />

        <div className="space-y-3">
          <div
            className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${
              error ? "bg-red-100" : "bg-orange-100"
            }`}
          >
            <Upload
              className={`w-6 h-6 ${error ? "text-red-500" : "text-orange-500"} ${uploading ? "animate-pulse" : ""}`}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">
              {uploading ? "Uploading..." : "Drop your image here, or click to browse"}
            </p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
          </div>

          {uploading && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{ width: "60%" }} />
            </div>
          )}
        </div>
      </div>

      <ErrorMessage message={error} />
    </div>
  )
}


export default ImageUpload
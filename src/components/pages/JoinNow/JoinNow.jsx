"use client"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { User, Phone, Mail, GraduationCap, Calendar, Building, Hash, Users, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeadingBadge from "@/components/shared/Heading/HeadingBadge"

const departments = [
  "Computer Technology",
  "Civil Technology",
  "Electrical Technology",
  "Mechanical Technology",
  "Electronics Technology",
  "Power Technology",
  "Automobile Technology",
  "RAC Technology",
]

const sessions = ["19-20", "20-21", "21-22", "22-23", "23-24", "24-25","25-26"]

// Validation schema
const schema = z.object({
  phone: z
    .string()
    .min(11, { message: "Phone number must be 11 digits." })
    .regex(/^01\d{9}$/, {
      message: "Invalid phone number. It should start with '01' and be 11 digits.",
    }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender is required." }),
  }),
  department: z.string().nonempty({ message: "Please select a department." }),
  email: z
    .string()
    .optional()
    .refine((val) => !val || /^\S+@\S+\.\S+$/.test(val), {
      message: "Invalid email address.",
    }),
  session: z.string().nonempty({ message: "Please select a session." }),
  roll: z.string().min(1, { message: "Roll is required." }),
})



// Error Message Component
const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
      <AlertCircle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  )
}

// Input Field Component
const InputField= ({ label, icon, error, required, children }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {icon}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      <ErrorMessage message={error} />
    </div>
  )
}

const JoinNowForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("🎉 Registration Successful! You have successfully joined CodeKPI!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        reset()
      } else {
        if (result.errorSources && Array.isArray(result.errorSources)) {
          result.errorSources.forEach((errorSource) => {
            toast.error(`${errorSource.path}: ${errorSource.message}`, {
              position: "top-center",
            })
          })
        } else {
          toast.error(result.message || "Validation error", {
            position: "top-center",
          })
        }
      }
    } catch (error) {
      toast.error("There was an error submitting your registration. Please try again.", {
        position: "top-center",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 sm:py-24 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <HeadingBadge >
              <Users className="w-4 h-4" />
Join CodeKPI
            </HeadingBadge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Become a <span className="text-orange-500">Member</span>
            </h1>
            <p className="text-lg text-gray-600">
              Join Khulna Polytechnic Institute&apos;s premier programming community and start your journey in tech
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:p-8 p-4  border border-gray-400 shadow-lg ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                 <InputField
                label="Full Name"
                icon={<User className="w-4 h-4 inline mr-2" />}
                error={errors.name?.message}
                required
              >
                <input
                  id="name"
                  placeholder="Your Full Name"
                  {...register("name")}
                  className={`w-full px-4 py-3 border rounded-lg  focus:outline-none transition-colors ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
              </InputField>
              {/* Phone Number */}
              <InputField
                label="Phone Number"
                icon={<Phone className="w-4 h-4 inline mr-2" />}
                error={errors.phone?.message}
                required
              >
                <input
                  id="phone"
                  placeholder="01XXXXXXXXX"
                  {...register("phone")}
                  className={`w-full px-4 py-3  rounded-lg focus:outline-none transition-colors border ${
                    errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
              </InputField>

              {/* Name */}
           

              {/* Gender */}
              <InputField
                label="Gender"
                icon={<Users className="w-4 h-4 inline mr-2" />}
                error={errors.gender?.message}
                required
              >
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="male"
                          checked={field.value === "male"}
                          onChange={field.onChange}
                          className="w-4 h-4 text-orange-500 border  border-gray-300"
                        />
                        <span className="text-gray-700">Male</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="female"
                          checked={field.value === "female"}
                          onChange={field.onChange}
                          className="w-4 h-4 border border-gray-300"
                        />
                        <span className="text-gray-700">Female</span>
                      </label>
                    </div>
                  )}
                />
              </InputField>

              {/* Department and Session Row */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Department */}
                <InputField
                  label="Department"
                  icon={<GraduationCap className="w-4 h-4 inline mr-2" />}
                  error={errors.department?.message}
                  required
                >
                  <Controller
                    name="department"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors bg-white ${
                          errors.department ? "border-red-300 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </InputField>

                {/* Session */}
                <InputField
                  label="Session"
                  icon={<Calendar className="w-4 h-4 inline mr-2" />}
                  error={errors.session?.message}
                  required
                >
                  <Controller
                    name="session"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`w-full px-4 py-3 border rounded-lg  transition-colors bg-white focus:outline-none ${
                          errors.session ? "border-red-300 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select Session</option>
                        {sessions.map((session) => (
                          <option key={session} value={session}>
                            {session}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </InputField>
              </div>

              {/* Roll */}
              <InputField
                label="Roll Number"
                icon={<Hash className="w-4 h-4 inline mr-2" />}
                error={errors.roll?.message}
                required
              >
                <input
                  id="roll"
                  placeholder="Your Roll Number"
                  {...register("roll")}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline transition-colors ${
                    errors.roll ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
              </InputField>

              {/* Email (Optional) */}
              <InputField label="Email" icon={<Mail className="w-4 h-4 inline mr-2" />} error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com (optional)"
                  {...register("email")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                />
              </InputField>


              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join CodeKPI
                    <Users className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {/* Form Status */}
              {Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Please fix the following errors:</span>
                  </div>
                  <ul className="mt-2 text-sm text-red-600 list-disc list-inside">
                    {Object.values(errors).map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}
            </form>
          </div>

          {/* Help Text */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{" "}
              <a href="mailto:contact@codekpi.org" className="text-orange-500 hover:text-orange-600">
                contact@codekpi.club
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default JoinNowForm

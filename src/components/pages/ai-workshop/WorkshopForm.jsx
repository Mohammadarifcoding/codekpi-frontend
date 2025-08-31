"use client"
import { Controller, useForm } from "react-hook-form"
import InputField from "../reviews/write/InputField"
import { AlertCircle, Bot, Building, Calendar, GraduationCap, Mail, Phone, RefreshCcw, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { departmentList, gender, sessionList, WorkshopDefaultValues, WorkshopStudentValidation } from "./validation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

// Notes:
// - Removed the artificial 4s delay.
// - Fixed error state usage (was `Error` instead of `error`).
// - Rely on RHF's `isSubmitting` for loading state.
// - Tightened field-level error styling (each field checks its own error).
// - Added accessible error card with retry that clears error state.
// - Disabled inputs while submitting to avoid double submissions.
// - Minor visual refinements for consistency.

const WorkshopForm = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(WorkshopStudentValidation),
    defaultValues: WorkshopDefaultValues,
    mode: "onChange",
  })

  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    setError(null)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/workshop/create`,
        data
      )

      if (res.status === 200 || res.status === 201) {
        reset()
        router.push(`/ai-workshop/success?studentName=${encodeURIComponent(data.name)}`)
        return
      }

      setError({ message: "Registration failed. Please try again." })
    } catch (err) {
      const apiMsg = err?.response?.data?.message || err?.message
      setError({ message: apiMsg || "Something went wrong. Please try again." })
    }
  }

  const retry = () => setError(null)

  // Error screen
  if (error) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:p-8 p-5 shadow-xl mt-5 border border-white/20 sm:w-[500px] w-full">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h2 className="text-lg font-semibold">Registration failed</h2>
          </div>
          <p className="text-sm text-gray-600 max-w-[32ch]">
            {error.message || "Please check your details and try again."}
          </p>
          <Button onClick={retry} className="w-full bg-orange-700 hover:bg-orange-600">
            Try Again
            <RefreshCcw className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:p-8 p-5 shadow-xl mt-5 border border-white/20 sm:w-[500px] w-full">
      {/* Submitting overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl grid place-items-center z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-600 text-sm">Processing your registration…</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputField
              label="Full Name"
              icon={<User className="w-4 h-4 inline mr-2" />}
              error={errors.name?.message}
              required
            >
              <Input
                {...field}
                type="text"
                placeholder="Enter your full name"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${
                  errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              />
            </InputField>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              label="Email"
              icon={<Mail className="w-4 h-4 inline mr-2" />}
              error={errors.email?.message}
              required
            >
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${
                  errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              />
            </InputField>
          )}
        />

        <Controller
          name="whatsApp"
          control={control}
          render={({ field }) => (
            <InputField
              label="WhatsApp Number"
              icon={<Phone className="w-4 h-4 inline mr-2" />}
              error={errors.whatsApp?.message}
              required
            >
              <Input
                {...field}
                type="text"
                placeholder="Enter your WhatsApp number"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${
                  errors.whatsApp ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              />
            </InputField>
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <InputField
              label="Gender"
              icon={<Users className="w-4 h-4 inline mr-2" />}
              error={errors.gender?.message}
              required
            >
              <select
                {...field}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                  errors.gender ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              >
                <option value="">Select Gender</option>
                {gender.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </InputField>
          )}
        />

        <div className="flex sm:flex-row flex-col sm:gap-2 gap-4">
          <Controller
            name="session"
            control={control}
            render={({ field }) => (
              <InputField
                label="Session"
                icon={<Calendar className="w-4 h-4 inline mr-2" />}
                error={errors.session?.message }
                required
              >
                <select
                  {...field}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                    errors.session ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Session</option>
                  {sessionList.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </InputField>
            )}
          />

          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <InputField
                label="Department"
                icon={<GraduationCap className="w-4 h-4 inline mr-2" />}
                error={errors.department?.message}
                required
              >
                <select
                  {...field}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                    errors.department ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Department</option>
                  {departmentList.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </InputField>
            )}
          />
        </div>

        <Controller
          name="polytechnic"
          control={control}
          render={({ field }) => (
            <InputField
              label="Polytechnic Institute"
              icon={<Building className="w-4 h-4 inline mr-2" />}
              error={errors.polytechnic?.message}
              required
            >
              <Input
                {...field}
                type="text"
                placeholder="e.g. Khulna Polytechnic Institute"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${
                  errors.polytechnic ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              />
            </InputField>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full bg-orange-700 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Registering...
            </>
          ) : (
            <>
              Register for AI Workshop
              <Bot className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

export default WorkshopForm

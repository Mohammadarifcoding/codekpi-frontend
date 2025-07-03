"use client"

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import InputField from './InputField';
import ImageUpload from '@/components/shared/ImageUpload/ImageUpload';
import { AlertCircle, Badge, Calendar, Check, Clock, GraduationCap, MessageSquare, User } from 'lucide-react';
import {motion} from 'framer-motion'
import StarRating from './StarRating';
import HeadingBadge from '@/components/shared/Heading/HeadingBadge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import Submitted from './Submitted';



const reviewSchema = z.object({
  userImage: z.string().url("Please upload a valid image").optional().or(z.literal("")),
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  text: z.string().min(10, "Review must be at least 10 characters").max(500, "Review must be less than 500 characters"),
  rating: z.number().min(1, "Please select a rating").max(5, "Rating must be between 1 and 5"),
  department: z.string().min(1, "Please select your department"),
  session: z.string().min(1, "Please select your session"),
  shift: z.string().min(1, "Please select your shift"),
  status: z.boolean().default(true),
})



const ReviewForm = () => {
     const shouldReduceMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      userImage: "",
      name: "",
      text: "",
      rating: 0,
      status: true,
      department: "",
      session: "",
      shift: "",
    },
    mode: "onChange", // Validate on change for better UX
  })
   const watchedText = watch("text")
  const textLength = watchedText?.length || 0

  const departments = ['CST', 'CT', 'ET', 'MT', 'ENT', 'PT', 'RAC']
 const sessions = [
  "2004-05", "2005-06", "2006-07", "2007-08", "2008-09",
  "2009-10", "2010-11", "2011-12", "2012-13", "2013-14",
  "2014-15", "2015-16", "2016-17", "2017-18", "2018-19",
  "2019-20", "2020-21", "2021-22", "2022-23", "2023-24",
  "2024-25"
];

  const shifts = ["Morning Shift", "Day Shift"]


   const onSubmit = async (data) => {
    try {
      

      // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 2000))
    const submitReview = await axios.post("https://code-kpi-backend.vercel.app/api/v1/review",data)
    console.log(submitReview)
    if(submitReview.data.success){
        setSubmitted(true)
    }
    else{
        throw new Error("Failed to submit review")
    }
      
    } catch (error) {
      console.error("Submission error:", error)
      alert("Failed to submit review. Please try again.")
    }
  }
 if (submitted) {
    return (

    <Submitted onClick={()=>{
      setSubmitted(false)
      reset()
    }}/>
    )
  }


    return (
           <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12 px-4 `}>
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ rotate: [0, 360], y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 right-10 w-12 h-12 bg-orange-400/20 rounded-lg transform rotate-45"
        />
        <motion.div
          animate={{ x: [-5, 5, -5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-32 left-8 text-2xl font-mono text-teal-500/20 font-bold"
        >
          {"</>"}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">

           <HeadingBadge>

   <MessageSquare className="w-4 h-4" />
              Share Your Experience
            </HeadingBadge>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Submit Your <span className="text-orange-500">Review</span>
          </h1>
          <p className="text-lg text-gray-600">Help other students by sharing your experience with CodeKPI</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload */}
            <Controller
              name="userImage"
              control={control}
              render={({ field }) => (
                <ImageUpload value={field.value} onChange={field.onChange} error={errors.userImage?.message} />
              )}
            />

            {/* Name */}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                      errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  />
                </InputField>
              )}
            />

            {/* Department, Session, Shift */}
            <div className="grid md:grid-cols-3 gap-4">
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none focus:border-orange-500 transition-colors ${
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
                  </InputField>
                )}
              />

              <Controller
                name="session"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Session"
                    icon={<Calendar className="w-4 h-4 inline mr-2" />}
                    error={errors.session?.message}
                    required
                  >
                    <select
                      {...field}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none  transition-colors  ${
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
                  </InputField>
                )}
              />

              <Controller
                name="shift"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Shift"
                    icon={<Clock className="w-4 h-4 inline mr-2" />}
                    error={errors.shift?.message}
                    required
                  >
                    <select
                      {...field}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none focus:border-orange-500 transition-colors ${
                        errors.shift ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Shift</option>
                      {shifts.map((shift) => (
                        <option key={shift} value={shift}>
                          {shift}
                        </option>
                      ))}
                    </select>
                  </InputField>
                )}
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Rating <span className="text-red-500">*</span>
              </label>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <StarRating value={field.value} onChange={field.onChange} error={errors.rating?.message} />
                )}
              />
            </div>

            {/* Review Text */}
            <Controller
              name="text"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Your Review"
                  icon={<MessageSquare className="w-4 h-4 inline mr-2" />}
                  error={errors.text?.message}
                  required
                >
                  <Textarea
                    {...field}
                    placeholder="Share your experience with CodeKPI... What did you learn? How did it help you?"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none ${
                      errors.text ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    <span
                      className={`text-xs ${
                        textLength > 500 ? "text-red-500" : textLength > 450 ? "text-yellow-600" : "text-gray-500"
                      }`}
                    >
                      {textLength}/500 characters
                    </span>
                    {textLength > 450 && (
                      <span className="text-xs text-yellow-600">{500 - textLength} characters remaining</span>
                    )}
                  </div>
                </InputField>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Submitting Review...
                </>
              ) : (
                <>
                  Submit Review
                  <Check className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {/* Form Status */}
            {/* {Object.keys(errors).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Please fix the following errors:</span>
                </div>
                <ul className="mt-2 text-sm text-red-600 list-disc list-inside">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error.message}</li>
                  ))}
                </ul>
              </motion.div>
            )} */}
          </form>
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-gray-500">
            Your review will be reviewed by our team before being published. Thank you for your feedback!
          </p>
        </motion.div>
      </div>
    </div>
    );
};

export default ReviewForm;






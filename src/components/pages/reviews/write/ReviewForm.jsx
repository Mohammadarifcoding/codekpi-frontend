"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import InputField from "./InputField";
import {
  Calendar,
  Check,
  Clock,
  GraduationCap,
  MessageSquare,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import HeadingBadge from "@/components/shared/Heading/HeadingBadge";
import { motion } from "framer-motion";

// Lazy load components
const ImageUpload = dynamic(() => import("@/components/shared/ImageUpload/ImageUpload"));
const Submitted = dynamic(() => import("./Submitted"));
const StarRating = dynamic(() => import("./StarRating"));

const reviewSchema = z.object({
  userImage: z
    .string()
    .url("Please upload a valid image")
    .min(1, "Profile picture is required"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  text: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(1000, "Review must be less than 1000 characters"),
  rating: z.number().min(1, "Please select a rating").max(5),
  department: z.string().min(1, "Please select your department"),
  session: z.string().min(1, "Please select your session"),
  shift: z.string().min(1, "Please select your shift"),
  status: z.boolean().default(true),
});

const departments = ["CST", "CT", "ET", "MT", "ENT", "PT", "RAC"];
const sessions = Array.from(
  { length: 21 },
  (_, i) => `${2004 + i}-${(2005 + i).toString().slice(-2)}`
);
const shifts = ["Morning Shift", "Day Shift"];

const ReviewForm = () => {
  const [submitted, setSubmitted] = useState(false);

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
    mode: "onChange",
  });

  const textLength = watch("text")?.length || 0;
  const uploadedImage = watch("userImage");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/review`,
        data
      );
      if (res.data.success) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  if (submitted) {
    return (
      <Submitted
        onClick={() => {
          setSubmitted(false);
          reset();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <HeadingBadge>
            <MessageSquare className="w-4 h-4" /> Share Your Experience
          </HeadingBadge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Submit Your <span className="text-orange-500">Review</span>
          </h1>
          <p className="text-lg text-gray-600">
            Help other students by sharing your experience with CodeKPI
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload */}
            <Controller
              name="userImage"
              control={control}
              render={({ field }) => (
                <div>
                  <ImageUpload
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.userImage?.message}
                  />
                  {!uploadedImage && (
                    <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                      <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs">
                        ⚠ Profile picture is required
                      </span>
                    </p>
                  )}
                </div>
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                </InputField>
              )}
            />

            {/* Department / Session / Shift */}
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors ${
                        errors.department
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors ${
                        errors.session
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors ${
                        errors.shift
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
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
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <StarRating
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.rating?.message}
                />
              )}
            />

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
                    placeholder="Share your experience with CodeKPI..."
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none ${
                      errors.text
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    <span
                      className={`text-xs ${
                        textLength > 1000
                          ? "text-red-500"
                          : textLength > 900
                          ? "text-yellow-600"
                          : "text-gray-500"
                      }`}
                    >
                      {textLength}/1000 characters
                    </span>
                  </div>
                </InputField>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />{" "}
                  Submitting Review...
                </>
              ) : (
                <>
                  Submit Review <Check className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-gray-500">
            Your review will be reviewed by our team before being published.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReviewForm;

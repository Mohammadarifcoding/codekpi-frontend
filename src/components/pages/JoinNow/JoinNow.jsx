"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const departments = [
  "Computer Technology",
  "Civil Technology",
  "Electrical Technology",
  "Mechanical Technology",
  "Electronics Technology",
  "Power Technology",
  "Automobile Technology",
  "RAC Technology",
];

const sessions = ["19-20", "20-21", "21-22", "22-23", "23-24", "24-25"];

// Define a validation schema using Zod.
// Note that the field names have been updated to match the API:
// - "phone" instead of "phoneNumber"
// - "roll" instead of "rollNumber"
// - "gender" has been added.
const schema = z.object({
  phone: z
    .string()
    .min(11, { message: "Phone number must be 11 digits." })
    .regex(/^01\d{9}$/, {
      message:
        "Invalid phone number. It should start with '01' and be 11 digits.",
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
  polytechnic: z
    .string()
    .nonempty({ message: "Please select a polytechnic." }),
});

const JoinNow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://code-kpi-backend.vercel.app/api/v1/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Registration Successful! You have successfully joined the club!"
        );
        reset();
      } else {
        // Loop through error sources if available and display each error
        if (result.errorSources && Array.isArray(result.errorSources)) {
          result.errorSources.forEach((errorSource) => {
            toast.error(`${errorSource.path}: ${errorSource.message}`);
          });
        } else {
          toast.error(result.message || "Validation error");
        }
      }
    } catch (error) {
      toast.error(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-[800px] gap-6 mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Join Now</h2>

        {/* Phone Number */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phone"
            placeholder="01XXXXXXXXX"
            {...register("phone")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            placeholder="Your Name"
            {...register("name")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="male"
                    checked={field.value === "male"}
                    onChange={field.onChange}
                    className="form-radio text-blue-500"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="female"
                    checked={field.value === "female"}
                    onChange={field.onChange}
                    className="form-radio text-blue-500"
                  />
                  <span>Female</span>
                </label>
              </div>
            )}
          />
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>

        {/* Department */}
        <div className="space-y-2">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Department
          </label>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
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
          {errors.department && (
            <p className="text-sm text-red-500">{errors.department.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email (Optional)
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Session */}
        <div className="space-y-2">
          <label
            htmlFor="session"
            className="block text-sm font-medium text-gray-700"
          >
            Session
          </label>
          <Controller
            name="session"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
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
          {errors.session && (
            <p className="text-sm text-red-500">{errors.session.message}</p>
          )}
        </div>

        {/* Roll */}
        <div className="space-y-2">
          <label
            htmlFor="roll"
            className="block text-sm font-medium text-gray-700"
          >
            Roll
          </label>
          <input
            id="roll"
            placeholder="Your Roll"
            {...register("roll")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.roll && (
            <p className="text-sm text-red-500">{errors.roll.message}</p>
          )}
        </div>

        {/* Polytechnic */}
        <div className="space-y-2">
          <span className="block text-sm font-medium text-gray-700">
            Polytechnic
          </span>
          <Controller
            name="polytechnic"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Khulna Polytechnic Institute"
                    checked={field.value === "Khulna Polytechnic Institute"}
                    onChange={field.onChange}
                    className="form-radio text-blue-500"
                  />
                  <span>Khulna Polytechnic Institute</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Khulna Mohila Polytechnic Institute"
                    checked={
                      field.value === "Khulna Mohila Polytechnic Institute"
                    }
                    onChange={field.onChange}
                    className="form-radio text-blue-500"
                  />
                  <span>Khulna Mohila Polytechnic Institute</span>
                </label>
              </div>
            )}
          />
          {errors.polytechnic && (
            <p className="text-sm text-red-500">{errors.polytechnic.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Join Now"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default JoinNow;

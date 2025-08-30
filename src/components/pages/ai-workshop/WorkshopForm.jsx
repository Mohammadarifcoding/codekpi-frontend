"use client"
import { Controller, useForm } from "react-hook-form"
import InputField from "../reviews/write/InputField"
import { Mail, Phone, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { WorkshopDefaultValues, WorkshopStudentValidation } from "./validation"

const WorkshopForm = ()=>{
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset,
        watch,
      } = useForm({
        resolver: zodResolver(WorkshopStudentValidation),
        defaultValues: WorkshopDefaultValues,
        mode: 'onChange',
      })
        const onSubmit = async (data) => {
 
  }
    return(
    <div  className="bg-white/80 backdrop-blur-sm rounded-2xl sm:p-8 p-4 shadow-xl mt-5 border border-white/20 w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
           <Controller name="name" control={control} render={({ field }) => (
              <InputField label="Full Name" icon={<User className="w-4 h-4 inline mr-2" />} error={errors.name?.message} required>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${errors.name ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                />
              </InputField>
            )} /> 
                       <Controller name="email" control={control} render={({ field }) => (
              <InputField label="Email" icon={<Mail className="w-4 h-4 inline mr-2" />} error={errors.email?.message} required>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${errors.name ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                />
              </InputField>
            )} /> 

                                   <Controller name="whatsApp" control={control} render={({ field }) => (
              <InputField label="WhatsApp Number" icon={<Phone className="w-4 h-4 inline mr-2" />} error={errors.whatsApp?.message} required>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your WhatsApp number"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${errors.name ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                />
              </InputField>
            )} /> 
        </form>
                   
    </div>
    
    )
}


export default WorkshopForm
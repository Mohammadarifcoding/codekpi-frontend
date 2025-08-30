"use client"
import { Controller, useForm } from "react-hook-form"
import InputField from "../reviews/write/InputField"
import { Bot, Building, Calendar, GraduationCap, Mail, Phone, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { departmentList, gender, sessionList, WorkshopDefaultValues, WorkshopStudentValidation } from "./validation"
import { Button } from "@/components/ui/button"

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
    <div  className="bg-white/80 backdrop-blur-sm rounded-2xl sm:p-8 p-4 shadow-xl mt-5 border border-white/20 sm:w-[500px] w-full">
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
                          <Controller name="gender" control={control} className="w-full flex-1" render={({ field }) => (
                <InputField label="Gender" icon={<Users className="w-4 h-4 inline mr-2" />} error={errors.gender?.message} required>
                  <select
                    {...field}
                    className={`w-full px-4 py-3 border rounded-lg  focus:outline-none  transition-colors ${errors.gender ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                  >
                    <option value="">Select Gender</option>
                    {gender.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
                  </select>
                </InputField>
              )} />
            <div className="flex sm:flex-row flex-col sm:gap-2 gap-4">
              <Controller name="session" control={control} className="w-full flex-1" render={({ field }) => (
                <InputField label="Session" icon={<Calendar className="w-4 h-4 inline mr-2" />} error={errors.session?.message} required>
                  <select
                    {...field}
                    className={`w-full px-4 py-3 border rounded-lg  focus:outline-none  transition-colors ${errors.session ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                  >
                    <option value="">Select Session</option>
                    {sessionList.map((session) => <option key={session} value={session}>{session}</option>)}
                  </select>
                </InputField>
              )} /><Controller name="department"  className="w-full flex-1" control={control} render={({ field }) => (
                <InputField label="Department" icon={<GraduationCap className="w-4 h-4 inline mr-2" />} error={errors.department?.message} required>
                  <select
                    {...field}
                    className={`w-full px-4 py-3 border rounded-lg  focus:outline-none  transition-colors ${errors.department ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                  >
                    <option value="">Select Department</option>
                    {departmentList.map((dept) => <option key={dept} value={dept}>{dept}</option>)}
                  </select>
                </InputField>
              )} />
            </div>
                                   <Controller name="polytechnic" control={control} render={({ field }) => (
              <InputField label="Polytechnic Institute" icon={<Building className="w-4 h-4 inline mr-2" />} error={errors.polytechnic?.message} required>
                <Input
                  {...field}
                  type="text"
                  placeholder="e.g. Khulna Polytechnic Institute"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors ${errors.polytechnic ? "border-red-300 bg-red-50" : "border-gray-300"}`}
                />
              </InputField>
            )} /> 
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
import ErrorMessage from "@/components/shared/Error/ErrorMessage"

const InputField = ({ label, icon, error, required, children }) => {
  return (
    <div className="space-y-2 flex items-start flex-col">
      <label className="block text-sm font-medium text-gray-700">
        {icon}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      <ErrorMessage message={error} />
    </div>
  )
}


export default InputField
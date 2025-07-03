import ErrorMessage from "@/components/shared/Error/ErrorMessage"
import { Star } from "lucide-react"
import {useState} from "react"


const StarRating= ({ value, onChange, error, readonly = false }) => {
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={readonly}
            onClick={() => !readonly && onChange(star)}
            onMouseEnter={() => !readonly && setHoverRating(star)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
            className={`p-1 transition-all duration-200 ${
              readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
            } ${error ? "animate-pulse" : ""}`}
          >
            <Star
              className={`w-6 h-6 transition-colors ${
                star <= (hoverRating || value)
                  ? "text-yellow-400 fill-yellow-400"
                  : error
                    ? "text-red-300 hover:text-red-200"
                    : "text-gray-300 hover:text-yellow-200"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          {value > 0 ? `${value} star${value > 1 ? "s" : ""}` : "Select rating"}
        </span>
        <ErrorMessage message={error} />
      </div>
    </div>
  )
}


export default StarRating
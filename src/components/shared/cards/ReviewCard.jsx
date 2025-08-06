import { Badge } from "@/components/ui/badge"
import Rating from "@/components/ui/Rating"
import { MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const ReviewCard = ({ review , show = false}) => {
  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Profile Image */}
        <Image
          src={review.userImage || "/placeholder.svg?height=48&width=48"}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
          width={60}
          height={60}
        />

        {/* User Info */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg mb-1">
            {review.name}
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700 border-orange-200 text-xs"
            >
              {review.department}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-teal-100 text-teal-700 border-teal-200 text-xs"
            >
              {review.session}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Rating value={review.rating} />
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-500 text-sm">
              {formatDate(review.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <div className="mb-4 flex-grow">
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {review.text?.length < 270 || show ? review.text : <>
          {review.text?.slice(0,250)}  <Link href={`/reviews/view/${review._id}`} className="text-orange-500 hover:underline">Read More</Link>
          
          
          
          </> }
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">{review.shift}</span>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MessageSquare className="w-4 h-4" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
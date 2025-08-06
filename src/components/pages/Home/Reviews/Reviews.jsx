"use client"
import React, { useState } from "react"
import { Star, MessageSquare, Users, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/ui/Rating"
import ReviewCard  from '@/components/shared/cards/ReviewCard';
import SkeletonCard from "@/components/shared/skeleton/SkeletonCard"

// Sample data matching your structure
const sampleReviews = [
  {
    _id: { $oid: "6866c97b0e4951dfa98b4bac" },
    userImage:
      "https://res.cloudinary.com/dztxlecbe/image/upload/v1751566236/delswofnafbhdl3o7o06.jpg",
    name: "NEELIMA AMIN",
    text:
      "When I first came to this club, I didn't really know what the programming world was, but when Brother Arif explained it to us, I understood what the programming world was. This club inspired me to achieve my all of the goals and also helped me!\nThank you!",
    rating: 5,
    status: true,
    department: "CST",
    session: "2024-25",
    shift: "Morning Shift",
    createdAt: { $date: "2025-07-03T18:18:35.022Z" },
    updatedAt: { $date: "2025-07-03T18:18:35.022Z" },
    __v: 0
  },
   {
    _id: { $oid: "6866c97b0e4951dfa98b4bac" },
    userImage:
      "https://res.cloudinary.com/dztxlecbe/image/upload/v1751566236/delswofnafbhdl3o7o06.jpg",
    name: "NEELIMA AMIN",
    text:
      "When I first came to this club, I didn't really know what the programming world was, but when Brother Arif explained it to us, I understood what the programming world was. This club inspired me to achieve my all of the goals and also helped me!\nThank you!",
    rating: 5,
    status: true,
    department: "CST",
    session: "2024-25",
    shift: "Morning Shift",
    createdAt: { $date: "2025-07-03T18:18:35.022Z" },
    updatedAt: { $date: "2025-07-03T18:18:35.022Z" },
    __v: 0
  },
  {
    _id: { $oid: "6866c97b0e4951dfa98b4bad" },
    userImage: "/placeholder.svg?height=64&width=64",
    name: "ARIF HOSSAIN",
    text:
      "Joining CodeKPI was the best decision! Learned a ton from real-world projects. The mentorship and community support here is incredible. Every workshop teaches something new and practical.",
    rating: 5,
    status: true,
    department: "CST",
    session: "2022-23",
    shift: "Day",
    createdAt: { $date: "2025-07-02T15:30:20.022Z" },
    updatedAt: { $date: "2025-07-02T15:30:20.022Z" },
    __v: 0
  },
  {
    _id: { $oid: "6866c97b0e4951dfa98b4bae" },
    userImage: "/placeholder.svg?height=64&width=64",
    name: "FATIMA KHAN",
    text:
      "The UI/UX workshops at CodeKPI completely changed my perspective on design. Now I can create beautiful and functional interfaces. The community is so supportive!",
    rating: 5,
    status: true,
    department: "IT",
    session: "2023-24",
    shift: "Evening",
    createdAt: { $date: "2025-07-01T12:15:10.022Z" },
    updatedAt: { $date: "2025-07-01T12:15:10.022Z" },
    __v: 0
  },
  {
    _id: { $oid: "6866c97b0e4951dfa98b4baf" },
    userImage: "/placeholder.svg?height=64&width=64",
    name: "RAHMAN UDDIN",
    text:
      "From zero programming knowledge to building full-stack applications - CodeKPI made it possible. The step-by-step guidance and hands-on projects are amazing.",
    rating: 4,
    status: true,
    department: "CST",
    session: "2023-24",
    shift: "Day",
    createdAt: { $date: "2025-06-30T09:45:30.022Z" },
    updatedAt: { $date: "2025-06-30T09:45:30.022Z" },
    __v: 0
  },
  {
    _id: { $oid: "6866c97b0e4951dfa98b4bb0" },
    userImage: "/placeholder.svg?height=64&width=64",
    name: "SARAH AHMED",
    text:
      "The AI/ML workshops opened up a whole new world for me. Now I'm working on machine learning projects and loving every moment of it. Thank you CodeKPI!",
    rating: 5,
    status: true,
    department: "EEE",
    session: "2022-23",
    shift: "Day",
    createdAt: { $date: "2025-06-29T16:20:45.022Z" },
    updatedAt: { $date: "2025-06-29T16:20:45.022Z" },
    __v: 0
  },
  {
    _id: { $oid: "6866c97b0e4951dfa98b4bb1" },
    userImage: "/placeholder.svg?height=64&width=64",
    name: "KARIM HASSAN",
    text:
      "CodeKPI's project-based learning approach is fantastic. I've built multiple web applications and gained real industry experience. Highly recommend to all students!",
    rating: 5,
    status: true,
    department: "IT",
    session: "2024-25",
    shift: "Evening",
    createdAt: { $date: "2025-06-28T14:10:15.022Z" },
    updatedAt: { $date: "2025-06-28T14:10:15.022Z" },
    __v: 0
  }
]




const Reviews = ({ className = "" }) => {
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const REVIEWS_PER_LOAD = 3

  // Load reviews function
  const loadReviews = async (offset = 0) => {
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newReviews = sampleReviews.slice(offset, offset + REVIEWS_PER_LOAD)
    const hasMoreReviews = offset + REVIEWS_PER_LOAD < sampleReviews.length

    setDisplayedReviews(prev => [...prev, ...newReviews])
    setHasMore(hasMoreReviews)
    setLoading(false)
  }

  // Initial load
  React.useEffect(() => {
    loadReviews(0)
  }, [])

  const handleLoadMore = () => {
    loadReviews(displayedReviews.length)
  }

  const totalReviews = sampleReviews.length
  const averageRating =
    sampleReviews.reduce((acc, review) => acc + review.rating, 0) /
    sampleReviews.length

  return (
    <section
      className={`py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 ${className}`}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 border border-orange-200 mb-6"
          >
            <Users className="w-4 h-4" />
            Student Reviews
          </Badge>

          <h2
            id="reviews-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            What Our <span className="text-orange-500">Students</span> Say
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Real experiences from CodeKPI members who have transformed their
            programming journey with us.
          </p>

          {/* Simple Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500">
                {totalReviews}+
              </div>
              <div className="text-sm text-gray-500">Happy Students</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-bold text-yellow-500">
                  {averageRating.toFixed(1)}
                </span>
                <Rating value={Math.round(averageRating)} />
              </div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedReviews.map(review => (
            <ReviewCard key={review._id.$oid} review={review} />
          ))}

          {/* Loading Cards */}
          {loading &&
            [...Array(REVIEWS_PER_LOAD)].map((_, index) => (
              <SkeletonCard key={`loading-${index}`} />
            ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Loading Reviews...
                </>
              ) : (
                "Load More Reviews"
              )}
            </Button>
          </div>
        )}

        {/* End Message */}
        {!hasMore && !loading && displayedReviews.length > 0 && (
          <div className="text-center">
            <p className="text-gray-500">You&apos;ve seen all reviews! 🎉</p>
            <p className="text-sm text-gray-400 mt-2">
              Want to share your experience?{" "}
              <a
                href="/submit-review"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Submit a review
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Reviews

"use client"

import React, { useEffect, useState } from "react"
import { Users, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/ui/Rating"
import ReviewCard from "@/components/shared/cards/ReviewCard"
import SkeletonCard from "@/components/shared/skeleton/SkeletonCard"
import Link from "next/link"
import useAxios from "@/hooks/useAxios"

const REVIEWS_PER_LOAD = 3

const Reviews = ({ className = "" }) => {
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [reviewsData, setReviewsData] = useState([])

  const axios = useAxios()

const loadReviews = (offset = 0, data = reviewsData) => {
  setLoading(true)
  new Promise(resolve => setTimeout(resolve, 1000))
  const newReviews = data.slice(offset, offset + REVIEWS_PER_LOAD)
  const hasMoreReviews = offset + REVIEWS_PER_LOAD < data.length

  setDisplayedReviews(prev => [...prev, ...newReviews])
  setHasMore(hasMoreReviews)
  setLoading(false)
}

useEffect(() => {
  const fetchReviews = async () => {
    try {
      setLoading(true)
      const res = await axios.get("/review")
      const data = res.data.data
      setReviewsData(data)
      loadReviews(0, data) // ✅ Call after setting data
    } catch (error) {
      console.error("Failed to fetch reviews:", error)
    }
  }

  fetchReviews()
}, [])

  const handleLoadMore = () => {
    setLoading(true)
    loadReviews(displayedReviews.length, reviewsData)
  }

  const averageRating =
    reviewsData.length > 0
      ? reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length
      : 0
console.log(displayedReviews)
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
                {reviewsData.length || 0}+
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
          {displayedReviews.map((review, index) => (
            <ReviewCard
              key={review?._id}
              review={review}
            />
          ))}

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
              <Link
                href="/reviews/write"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Submit a review
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Reviews

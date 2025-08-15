"use client"

import ErrorPage from "@/components/pages/error/error"


export default function Error({
  error,
  reset,
}) {
  return (
    <ErrorPage
      errorCode="Error"
      title="Something went wrong!"
      description="An unexpected error occurred. Please try again or contact support if the problem persists."
    />
  )
}

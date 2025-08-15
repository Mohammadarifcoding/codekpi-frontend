"use client"

import ErrorPage from "@/components/pages/error/error"



export default function GlobalError({
  error,
  reset,
}) {
  return (

        <ErrorPage
          errorType="500"
          title="Application Error"
          description="A critical error occurred. Our team has been notified and is working to resolve this issue."
          showBackButton={false}
          showHomeButton={true}
          showRefreshButton={true}
          showContactSupport={true}
        />
  )
}

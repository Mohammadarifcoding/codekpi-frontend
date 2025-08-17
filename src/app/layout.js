import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "CodeKpi",
  description:
    "Gain the skills and knowledge you need to succeed in today's competitive job market.",
  openGraph: {
    title: "Codekpi ",
    description: "Let's code with Codekpi",
    url: "https://www.codekpi.club/",
    siteName: "Codekpi",
    images: [
      {
        url: "https://res.cloudinary.com/dnjlwwcmo/image/upload/v1754473355/og_gxdd94.png",
        width: 1200,
        height: 630,
        alt: "CodeKpi",
      },
    ],
    twitter: {
      card: "Codekpi",
      title: "Codekpi",
      description: "Let's code with Codekpi",
      images: [
        "https://res.cloudinary.com/dnjlwwcmo/image/upload/v1754473355/og_gxdd94.png",
      ],
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="english">
        <div> {children} </div>
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}
// {"orgId":"team_6iM3ycdvBV4YAVgb30qJDD6K","projectId":"prj_9PvudQcVA8xwMbK16s9mw8Mw9co9"}
